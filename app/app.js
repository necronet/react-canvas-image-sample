import React from 'react'
import ReactDOM from 'react-dom'
import Image from './image'


const image_good_no = "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/917384_587085891468319_344695119_n.jpg?ig_cache_key=MTIyNzQ3ODYzOTY2ODIyMjY4NA%3D%3D.2.l"; 
const image_good = "https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/12912784_935807756517429_1013634594_n.jpg?ig_cache_key=MTIyNzQ4MTY1MTcwNTAzNzM5Ng%3D%3D.2";
ReactDOM.render(<Image src={image_good_no}/>, document.getElementById('content'));
