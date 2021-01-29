import React, { Component } from 'react';


class Comments extends Component {

    constructor(props) {
        super(props)
        this.state = { username: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ username: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
    }
    render() {
        return (
            <div className="margin">
                <form onSubmit={this.handleSubmit}>
                    <h2>Comments</h2><br /><br />
                    <input type="text" ref={this.curriculum} id="cmnt" spellCheck="false"/>
                    <textarea value={this.state.address} onChange={this.handleChange} id="txt" spellCheck="false"/><br/><br/><br/>
                    <input type="submit" value="Cancel" className="cmntbtn" />
                    <input type="reset" value="Comment" className="cnclbtn" /><br/>
                    <p></p>
                    
                </form>
            </div>
        );
    }
}

export default Comments;