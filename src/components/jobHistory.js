import React, { Component } from 'react';

class JobHistory extends Component {
	renderList(list){
		if (!list.length) return false;
		return list.map(function(item, i){
			return (
				<li key={i}>{item}</li>
			)
		})
	}
	renderJobs(){
		return this.props.jobHistory.map((job) => {
			return (
				<div className="col-sm-12 col-xs-12" key={job.key}>
					<div className="panel panel-default">
						<div className="panel-heading">
							<div className="panel-title">
								<span>{job.company}: {job.start_date} - {job.end_date}</span>
								<span className="pull-right hidden-xs">{job.title}</span>
							</div>
						</div>
						<div className="panel-body">
							<dl className="dl-horizontal">
								<dt></dt>
								<dd></dd>
								<dt>Tasks</dt>
								<dd>
									<ul className='list-unstyled'>
										{this.renderList(job.tasks)}
									</ul>
								</dd>
								<dt>Featured Projects</dt>
								<dd>
									<ul className='list-unstyled'>
										{this.renderList(job.featured_projects)}
									</ul>
								</dd>
								<dt>Technologies</dt>
								<dd>
									<ul>
										{this.renderList(job.technologies)}
									</ul>
								</dd>									
							</dl>
								
						</div>
					</div>
				</div>
			)
		})
	}
	render() {
		return (
			<div className="jobHistory">
					<h2 className="sectionTitle">Work History</h2>

				{this.renderJobs()}
			</div>
		);
	}
}

export default JobHistory;