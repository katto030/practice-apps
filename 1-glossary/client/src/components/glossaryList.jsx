import React from 'react';
import GlossaryListEntry from './glossaryListEntry.jsx';

var GlossaryList = (props) => {
  return (
    <div className="glossary-list">
      <h4 id="glossary-list-title">You have {props.list.length} words</h4>
      <div className="glossary-list-entries">
        {props.list.map((word) =>
          <GlossaryListEntry getAll={props.getAll} delete={props.delete} word={word} />
        )}
      </div>
    </div>
  )
}

export default GlossaryList;