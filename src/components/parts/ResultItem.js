import React from 'react';

function SubmitterInfo(submitter) {
  if (!submitter) {
    return null;
  } 

  let orgName = submitter.organization ? submitter.organization.name : '';
  return (
    <div className="submitted-div">
      <div>Submitted by: {submitter.name}</div>
      <div>{orgName}</div>
    </div>
  );
}

function AssigneeInfo(assignee) {
  if (!assignee) {
    return null;
  }

  let orgName = assignee.organization ? assignee.organization.name : '';
  return (
    <div className="assignee-div">
      <div>Assigned to: {assignee.name}</div>
      <div>{orgName}</div>
    </div>
  );
}

function OrganizationInfo(organization) {
  if (!organization) {
    return null;
  }
  return (
    <div className="organization-div">
      <div>{organization.name}</div>
      <div>{organization.url}</div>
    </div>
  );
}

const ResultItem = props => (
    <div className="search-result-item">
      <div className="created-div">
        Created: {props.created_at} via {props.via}
      </div>
      <SubmitterInfo {...props.submitter} />
      <AssigneeInfo {...props.assignee} />
      <div className="type-div">
        Type: {props.type}
      </div>
      <div className="subject-div">
        <h3>{props.subject}</h3>
      </div>
      <div className="description-div">
        {props.description}
      </div>
      <div className="priority-div">
        {props.priority} priority
      </div>
      <div className="status-div">
        {props.status}
      </div>
      <OrganizationInfo {...props.organization} />
      <div className="tags">
        {props.tags.map((tag, index) => <b key={index}>{tag} </b>)}
      </div>
    </div>
);

export default ResultItem;