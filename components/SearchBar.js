import React from 'react'
export default class SearchBar extends React.Component{
    state = { term: '' };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render() {
    return(
        <div className = "ui segment">
            <form onSubmit = {this.handleSubmit} className = "ui form">
                <div className="ui massive icon input">
                    <input 
                        type="text" 
                        placeholder="enter your keyword(s)"
                        value = {this.state.term}
                        onChange = {e => this.setState({ term: e.target.value })}
                    />
                    <i className="search icon"></i>
                </div>
            </form>
        </div>
    )}
}