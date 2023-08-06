import { useEffect, useState } from "react";
 //In the form there is default  reload thing when we click on the submit button it will be reloaded 
 //To prevent this type of thing we must use the e.preventDefault(); to stop and not to reload the page.

const initialState={
    channel: "Kumar",
    verified: true,
    title:'',
    views:''
}
 function AddVideos({addtheVideos,editableVideo,updateVideo}) { // Use object destructuring to correctly receive the prop by writing it into the curly braces not just the parentheses
    const [video, setVideo] = useState(initialState);
    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo)
        {
            updateVideo(video)
        }
        else{
            addtheVideos(video)
        }
        // addtheVideos(video)
        setVideo(initialState)
        // console.log(video)
     }
    function handleChange(e) {
        // console.log(e.target.name, e.target.value);
        setVideo({ ...video,
             [e.target.name]:e.target.value
             })
            //  console.log(video)
    }


    useEffect(()=>{
        // console.log('effect')
        if(editableVideo)
        {
            setVideo(editableVideo)
        }         
    },[editableVideo]) //If we don't put the array [] blank here it will be run infinite 
    return (
        <form>
            <input type="text"
                name="title"
                onChange={handleChange}
                placeholder="title" 
                value ={video.title}
                />
            <input type="text"
                name="views"
                onChange={handleChange}
                placeholder="views" 
                value={video.views}/>
            <button
                onClick={handleSubmit}

            >
            {editableVideo?'Edit':'Add'} Video
            </button>
        </form>
    )
}

export default AddVideos;



//onClick={() => {
                // setVideos([...videos, {
                //     id: videos.length + 1,
                //     title: 'MongoDB learning',
                //     views: '240k',
                //     time: '6 month ago',
                //     channel: "Kumar Rohan",
                //     verified: true
                // }])
            //}}

           