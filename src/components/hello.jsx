import PropTypes from "prop-types";

Hello.propTypes = {
    name: {
        type: PropTypes.string.isRequired
    }
}

function Hello(props) {
    const { name } = props
    return(
        <h1>Hello world {name}</h1>
    )
}



export default Hello;