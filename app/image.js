import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'

export default class Image extends React.Component {

	constructor(props){
		super(props);
		this.state = {invalid:false}
		console.log('constructor');
	}

	componentDidUpdate() { 
		console.log(this.state); 
		
		if(this.state.invalid) return;
		this.updateCanvas()
	}
	componentDidMount(){ 
		console.log('did mount');
		const image = ReactDOM.findDOMNode(this.refs.image);
		image.crossOrigin = 'Anonymous';
		image.src=this.props.src;
		this.updateCanvas()
		}
	
	updateCanvas() {
		console.log('component updating now');
		const canvas = ReactDOM.findDOMNode(this.refs.canvas_image);
		const ctx = canvas.getContext('2d');
		const image = ReactDOM.findDOMNode(this.refs.image);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(image, 0, 0,100,100);
			
		const yAxis = Math.floor(Math.random() * 100);
		console.log(`Y: ${yAxis}`)
		const data = ctx.getImageData(0, yAxis, 1, 1);

		if (data) 
		{
		let whiteColor =  new Array(255,255,255,255);
		console.log(data.data);
		console.log(whiteColor);
		

		if(_.isEqual(_.toArray(data.data),whiteColor)){
			//mark as unusable
			console.log('Image unusable');
			image.onload = null;
			this.setState({invalid:true});
				
		}
		
		}
	}

	render() {
		console.log(this.state.invalid);
		if(this.state.invalid) 
			return <div style={{color:'white'}}>No valid image</div>;	
		return <div><img ref="image" onLoad={this.updateCanvas.bind(this)} /> <canvas style={{display:'none'}} ref="canvas_image"/></div>
	}

}
