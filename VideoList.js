import Videomain from "./Videomain";
import PlayButton from "./PlayButton";

function VideoList({videos,deleteVideo,editVideo}) {
    return (
        <>
            {
                videos.map(k =>
                    <Videomain
                        key={k.id}
                        title={k.title}
                        views={k.views}
                        time={k.time}
                        channel={k.channel}
                        verified={k.verified}
                        id={k.id}
                        deleteVideo={deleteVideo}
                        editVideo={editVideo}

                    >
                        <PlayButton
                            onPlay={() => console.log('playy it', k.title)}
                            onPause={() => console.log('pause it', k.title)}
                        >
                            {k.title}
                        </PlayButton>

                    </Videomain>
                )
            }

        </>

    )
}

export default VideoList;