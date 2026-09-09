import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleButton from './ToggleButton';

describe('ToggleButton', () => {
  it('renders a button labeled "button"', () => {
    render(<ToggleButton />);
    expect(screen.getByRole('button', { name: 'button' })).toBeInTheDocument();
  });

  it('toggles its background color between green and red on click', async () => {
    const user = userEvent.setup();
    render(<ToggleButton />);
    const button = screen.getByRole('button', { name: 'button' });

    expect(button).toHaveStyle({ backgroundColor: 'green' });

    await user.click(button);
    expect(button).toHaveStyle({ backgroundColor: 'red' });

    await user.click(button);
    expect(button).toHaveStyle({ backgroundColor: 'green' });
  });
});
