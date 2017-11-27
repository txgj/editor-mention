// export this package's api
import { ContentState } from 'draft-js';
import Mention from './component/Mention.react';
import toContentString from './utils/exportContent';
import getMentions from './utils/getMentions';
import Nav from './component/Nav.react';

function toEditorState(text) {
  return ContentState.createFromText(text);
}

Mention.Nav = Nav;
Mention.toContentString = toContentString;
Mention.toEditorState = toEditorState;
Mention.getMentions = getMentions;

export { Nav, toContentString, toEditorState, getMentions };

export default Mention;