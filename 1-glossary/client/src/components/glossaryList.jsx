import React from 'react';
import GlossaryListEntry from './glossaryListEntry.jsx';

var GlossaryList = (props) => {
  return (
    <div className="glossary_list">
      <h4>You have {props.list.length} words</h4>
      <div>
        {props.list.map((word) =>
          <GlossaryListEntry getAll={props.getAll} delete={props.delete} word={word} />
        )}
      </div>
    </div>
  )
}

export default GlossaryList;