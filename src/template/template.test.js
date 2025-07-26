import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Template } from './template'

describe('Template', () => {
    it('Renders component', async () => {
        render(<Template props={{
            heading: 'Test Page'
        }}/>)
        await screen.findByTestId('template')
        const template = screen.getByTestId('template')
        expect(template).toBeInTheDocument()
        expect(template).toHaveTextContent('Test Page')
    })
})