import React from 'react';
import { event, render, screen } from '@testing-library/react';
import MyComp from './myComp';
import { mockComponent } from 'react-dom/test-utils';

test('Render single component.', async () => {
    const localIncrement = jest.fn();
    render(<MyComp count={5} increment={localIncrement}></MyComp>)

    const el = screen.getByText(/Hi there/i);
    el.click();
    el.click();
    el.click();
    console.log(localIncrement.mock.calls.length)
})