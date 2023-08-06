import './Videomain.css';
// import videos from './data/data'
function Videomain({ title, id,channel = "Kumar Rohan", views, time, verified ,children,deleteVideo,editVideo}) {
    return (
        <>
            <div className="container">
            <button className='close' onClick={()=>deleteVideo(id)}>X</button>
            <button className='close' onClick={()=>editVideo(id)}>Edit</button>
                <div className="pic">
                    <img src={`https://picsum.photos/id/${id}/200/300`} alt="look here" width="150" height="100" />
                </div>
                <div className="title">{title} </div>
                {<div className="channel">{channel}
                    {verified && '✅'}
                </div>

                }
                <div className="views">
                    {views} views <span>.</span>{time}
                </div>

                <div>{children}</div>
            </div>
        </>
    );

}

export default Videomain;

 // let channelJSX
    // if(verified)
    // {
    //     channelJSX=<div className="channel">{channel}✅ </div>;
    // }

    // else{
    //     channelJSX=<div className="channel">{channel} </div>;
    // }