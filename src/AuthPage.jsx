import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value }
        )
            .then(response => props.onAuth({ ...response.data, secret: value }))
            .catch(e => console.log('error', e))
    };

    return (

        <div className="main">
            <div className="background">
                <form onSubmit={onSubmit} className="form-card">
                    <div className="form-title">
                        <h1>Welcome👋</h1>
                        <p>Set a username to get started</p>
                    </div>
                    <div className="auth">
                        <div className="auth-label">Username</div>
                        <input className="auth-input" name="username" />
                        <div className="inputbtn">
                            <button className="auth-button" type="submit">Enter</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default AuthPage;