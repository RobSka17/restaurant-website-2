import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { Template } from './template'

describe('Template', () => {
    it('Renders component', async () => {
        render(<Template props={{}}/>)
        await screen.findByTestId('template')
        expect(screen.getByTestId('template')).toBeInTheDocument()
    })
})