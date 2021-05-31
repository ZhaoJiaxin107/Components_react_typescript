import React from 'react';
import Button, {ButtonSize, ButtonType} from './components/Button/button';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled>Hello</Button>
        <Button onClick = {(e) => {e.preventDefault(); alert(123)}}> World </Button>
        <Button autoFocus> World </Button>
        <Button className = "custom"> Nice </Button>
        <Button btnType={ButtonType.Primary} size = {ButtonSize.Large}>Hello World</Button>
        {/* <Button btnType={ButtonType.Link} href = "http://www.baidu.com" target = "_blank">Baidu Link</Button>
        <Button btnType={ButtonType.Link} href = "http://www.baidu.com" disabled>Baidu Link</Button> */}
        <Button btnType={ButtonType.Danger} size = {ButtonSize.Small}>Hello World</Button>
      </header>
    </div>
  );
}

export default App;
