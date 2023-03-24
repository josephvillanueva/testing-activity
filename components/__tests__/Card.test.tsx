import { render } from '@testing-library/react'
import { Card } from '../Card'

const yes = {
  header: 'header',
  description: 'desc',
  link: 'www.link.com'
}

describe('Card', () => {
  it('passing to header, description, and link the contents of yes object', () => {
    const { getByText, getByRole } = render(<Card {...yes} />)

    expect(getByText(yes.header)).toBeInTheDocument()
    expect(getByText(yes.description)).toBeInTheDocument()
    expect(getByRole('link')).toHaveAttribute('href', yes.link)
  })
})
