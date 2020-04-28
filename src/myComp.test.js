import React from 'react';
import { event, render, screen } from '@testing-library/react';
import MyComp from './myComp';

test('Render single component.', async () => {
    render(<MyComp count={5} onClick={() => console.log('hi')}></MyComp>)
    screen.debug()
    const el = screen.getByText(/Hi there/i);
    console.log(el)
    el.click();
})