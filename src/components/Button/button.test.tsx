import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonType, ButtonSize, ButtonProps } from './button'
const defaultProps = {
    onClick: jest.fn()
}
const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}
describe('test Button component', () =>{
    test('should render the corrent default button', ()=>{
        const wrapper = render(<Button {...defaultProps}>World</Button>)
        const element = wrapper.queryByText('World') as HTMLButtonElement
        // 判断组件是否在文档中
        expect(element).toBeInTheDocument()
        expect(element?.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-default')
        expect(element.disabled).toBeFalsy()
        fireEvent.click(element)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    test('should render the corrent default button based on different props', ()=>{
        const wrapper = render(<Button {...testProps}>World</Button>)
        const element = wrapper.queryByText('World')
        // 判断组件是否在文档中
        expect(element).toBeInTheDocument()
        expect(element).toHaveClass('btn-primary btn-lg klass')
    })
    test('should render a link when btnType equals link and href is provided', ()=> {
        const wrapper = render(<Button btnType = {ButtonType.Link} href = "">Link</Button>)
        const element = wrapper.getByText('Link')
        expect(element).toBeInTheDocument()
        expect(element.tagName).toEqual('BUTTON')
        expect(element).toHaveClass('btn btn-link')
    })
    test('should render diaabled button when disabled set to true',()=> {
        const wrapper = render(<Button {...disabledProps}>World</Button>)
        const element = wrapper.getByText('World') as HTMLButtonElement
        expect(element).toBeInTheDocument()
        expect(element.disabled).toBeTruthy()
        fireEvent.click(element)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})



