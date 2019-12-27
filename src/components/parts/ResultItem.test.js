import React from 'react';
import { mount } from 'enzyme';
import ResultItem from './ResultItem';

describe('SubmitterInfo', () => {
  it('should display submitter info if the data is present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
      },
      submitter: {
        name: 'Fred',
      },
      organization: {
        name: 'Megacorp',
        url: 'www.megacorp.com',
      }
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Submitted by: Fred</div>)).toBe(true);
  });

  it('should not display submitter info if no submitter is present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
      },
      submitter: false,
      organization: {
        name: 'Megacorp',
        url: 'www.megacorp.com',
      }
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Submitted by: Fred</div>)).toBe(false);
  });

  it('should display submitter organization if present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
      },
      submitter: {
        name: 'Fred',
        organization: {
          name: 'Minicorp'
        }
      },
      organization: {
        name: 'Megacorp',
        url: 'www.megacorp.com',
      }
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Minicorp</div>)).toBe(true);
  });
  it('should not display submitter organization if not present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
      },
      submitter: {
        name: 'Fred',
      },
      organization: {
        name: 'Megacorp',
        url: 'www.megacorp.com',
      }
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Minicorp</div>)).toBe(false);
  });
});

describe('AssigneeInfo', () => {
  it('should display assignee info if the data is present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
      },
      submitter: {
        name: 'Fred',
      },
      organization: {
        name: 'Megacorp',
        url: 'www.megacorp.com',
      }
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Assigned to: Jessica</div>)).toBe(true);
  });

  it('should not display assignee info if no assignee is present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Assigned by: Jessica</div>)).toBe(false);
  });

  it('should display assignee organization if present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
        organization: {
          name: 'Ultracorp'
        }
      },
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Ultracorp</div>)).toBe(true);
  });
  it('should not display assignee organization if not present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      assignee: {
        name: 'Jessica',
      },
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div>Ultracorp</div>)).toBe(false);
  });
});

describe('OrganizationInfo', () => {
  it('should display organization info if the data is present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
      organization: {
        name: 'Megacorp',
        url: 'www.megacorp.com',
      }
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div className="organization-div">
                              <div>Megacorp</div>
                              <div>www.megacorp.com</div>
                            </div>)).toBe(true);
  });

  it('should not display organization info if no data is present', () => {
    const resultData = {
      created_at: 'Today',
      via: 'web',
      subject: 'Test result',
      description: 'This is a test',
      priority: 'high',
      status: 'pending',
      tags: ['tag1'],
    };
    const wrapper = mount(<ResultItem {...resultData} />);

    expect(wrapper.contains(<div className="organization-div">
                              <div>Megacorp</div>
                              <div>www.megacorp.com</div>
                            </div>)).toBe(false);
  });
});