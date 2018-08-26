class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            visibility: false
        }
    }
    click (){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });

    }
    render(){
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.click}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
            {this.state.visibility && (
                <div>
                    <p>These are some details</p>
                </div>
            )}
        </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


/*const appRoot = document.getElementById('app');
let check = false;
const click = () => {
    check = !check;
    render();
};
const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={click}>{check ? 'Hide details' : 'Show details'}</button>
            {check && (
                <div>
                    <p>These are some details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();*/
