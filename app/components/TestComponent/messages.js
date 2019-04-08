/*
 * TestComponent Messages
 *
 * This contains all the text for the TestComponent component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.TestComponent';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the TestComponent component!',
  },
});
