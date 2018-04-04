import React, {Component} from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.getResult = this.getResult.bind(this);
    }

    createSearch(event) {
        console.log(event)
        event.preventDefault();
    }

    handleChange(e) {
        e.preventDefault();
        const Search = e.target.value;
        this.props.handleChange(Search);
    }
    getResult(login){
        console.log(login) 
        const Search = login;
        this.props.getTask(Search);
    }
    render() {
        const {
            items = []
        } = this.props.username;

        return (
            <nav className="nav navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle"
                            data-toggle="collapse"
                            data-target=".navbar-ex1-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Github Search</a>
                    </div>
                    <ul className="collapse navbar-collapse navbar-ex1-collapse">
                        <li>
                            <form className="navbar-form navbar-right" onSubmit={this.createSearch}>
                                <div className="form-group">
                                    <input
                                        type="search"
                                        name="search"
                                        className="form-control"
                                        placeholder="Search Github"
                                        onChange={this.handleChange}/>
                                </div>
                                <span>&#160;</span>
                                <button type="button" className="btn btn-default" onClick={this.props.getTask}>
                                    <span className="glyphicon glyphicon-search"></span>&#160;search</button>
                            </form>

                        </li>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a>total :{this.props.username.total_count}</a></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown">Results<b className="caret"></b></a>
                                <ul className="dropdown-menu result">
                                    {items.map(({id, login, avatar_url}) => <li key={id} onClick={this.getResult(login)} className='back'><img src={avatar_url} alt={login} height='38px' width='40px'/><p>{login}</p>
                                    </li>)}
                                </ul>
                            </li>
                        </ul>
                    </ul>
                </div>
            </nav>
        )
    }
}