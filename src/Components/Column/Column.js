function Column(props) {

    let columnStyle = {
        height: "" + (props.height*5) + "px",
        width: "15px"
        // backgroundColor: this.props.color
    }
    
    return (
        <div style={columnStyle}>
            
        </div>
    );
}

export default Column;