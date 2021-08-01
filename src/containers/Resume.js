import React from 'react';
import ResumeSection from '../components/ResumeSection/ResumeSection'
import LMlogo from '../img/Lockheed-martin-logo.png';

import './Resume.css';

const sys = ['Led project to develop a python 600+ line script to troubleshoot typical issues with development deployments', 
'Created automated test to gain insights on performance variation over time and on different environments',
'Improved and documented the procedure for transferring software from development to test environment',
'Led new process development for distributing patches that reduced deployment from 2 hours to less than 30 min',
'Received 6 internal recognition awards from peers and supervisors for work on two separate projects',
'Developed automated User Interface tests to replace manual procedures',
'Automated documentation of system architecture using Enterprise Architect and Microsoft Office API',
'Debugged system errors and inconsistencies in order to determine root causes',
'Edited process and code configurations to apply systems in offline environments']

const proj = [
'Programmed MVP for Smart Tool project that could integrate with Manufacturing Execution System and automate mix process that caused more than $100K in damages/year',
'Co-developed an Angular Application used by all major manufacturing sites at Lockheed Martin Space for shop floor management',
'Scoped work and created project schedule for internal site and tool redesign project',
'Facilitated internal site and tool redesign project',
'Successfully created python script that pulls and organizes data to produce key metrics for a poorly performing process to track improvement effectiveness',
'Investigating root cause behind process issues that cause about $1.1M in reprocessing per year and procured equipment to address issue for <$1K',
'Orchastrated acquisition of equipment that could decrease reprocessing'
]

const ml = ['Aided in the creation of Machine Learning Models to automatically identify root cause system issues',
'Started and led DevSecOps teamwhich reduced clone times by 10x and decreased repo storage by 2x',
'Produced initial system architecture for contract extension that later met multi-million dollar incentive goals',
'Successfully created generalized infrastructure for integrating GitLab pipelines with High Performance Computing environment',
'Automated nightly performance status and analysis so issues were caught within 24 hours',
'Transitioned program from outdated High Performance Computing scheduler to SLURM, greatly reducing system downtime',
'Created generalized High Performance Computing deployment tool suite leading to increased process stability',
'Developed prototype for AWS Cloud enabled batch computing to supplement High Performance Computing',
'Created tooling for system event detection and analysis',
'Led effor to coordinate with IT, Cyber Security and Program Management to expidite key software and hardware critical to program deadlines']

function Resume() {
    return (
        <div className='Resume'>
            <table>
                <tr>
                    <ResumeSection logo={LMlogo} company='Lockheed Martin' title='Software/ML Engineer (7/2020-CURRENT)' accomp={ml} />
                </tr>
                <tr>
                    <ResumeSection logo={LMlogo} company='Lockheed Martin' title='Project Engineer (7/2019-6/2020)' accomp={proj} />
                </tr>
                <tr>
                    <ResumeSection logo={LMlogo} company='Lockheed Martin' title='Systems Engineer (6/2018-7/2019)' accomp={sys} />
                </tr>
            </table>
        </div>
    );
}

export default Resume;