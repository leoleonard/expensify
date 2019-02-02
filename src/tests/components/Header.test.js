 import ReactShallowRenderer from 'react-test-renderer/shallow';

 import React from 'react';
 import Header from '../../components/Header';

 test('should render Header correclty', () => {
     const render = new ReactShallowRenderer();
     render.render(<Header />);
     console.log(render.getRenderOutput());
 })