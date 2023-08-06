// import Videomain from './components/Videomain'
import "./App.css";
import videoDB from './components/data/data'
//  import PlayButton from "./components/PlayButton";
import { useReducer, useState } from 'react';
import AddVideos from './components/AddVideos';
import "./components/AddVideos.css";
import VideoList from './components/VideoList';
function App() {

  console.log('render App')
  const [editableVideo, setEditableVideo] = useState(null);
  function videoReducer(videos, action) {

    switch (action.type) {
      case 'ADD':
        return [...videos,
        { ...action.payload, id: videos.length + 1 }
        ]
      case 'DELETE':
        return (videos.filter(parametervideo => parametervideo.id !== action.payload))

      case 'UPDATE':
        let index = videos.findIndex((v) => v.id === action.payload.id);
        let newVideos = [...videos]
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos
      default:
        return videos
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, videoDB)

  // const [videos, setVideos] = useState(videoDB);
  



  function addtheVideos(parametervideo) {
    dispatch({ type: 'ADD', payload: parametervideo })
    //action:({type:'ADD',payload:video})
    // setVideos([...videos,
    // { ...parametervideo, id: videos.length + 1 }
    // ]);
  }


  function deleteVideo(id) {
    dispatch({ type: 'DELETE', payload: id })
    // setVideos(videos.filter(parametervideo => parametervideo.id !== id))
    // console.log(id)
  }


  function editVideo(id) {
    setEditableVideo(videos.find(parametervideo => parametervideo.id === id));
  }


  function updateVideo(video) {
    dispatch({ type: 'UPDATE', payload: video })
    // let index = videos.findIndex((v) => v.id === video.id);
    // let newVideos = [...videos]
    // newVideos.splice(index, 1, video);
    // setVideos(newVideos);
    //  console.log(k)
  }

  return (
    <>
      <div className='App' onClick={() => console.log('App')}>
        <AddVideos addtheVideos={addtheVideos} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideos>
        {/* WE CAN WRITE HERE THE SAME FUNCTION NAME AS WHERE IT IS STRORING HERE THE PROP NAME IS SAME AS OF FUNCTION  */} *
        <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>
        <div style={{ clear: 'both' }}>

        </div>

      </div>
    </>
  );
}
export default App;

 //In the above code we have also the #lifting state up (when we want that data will be move from child to parent).