export default function RepoDetails({ details, loading }) {
  return (
    <div className="repo-details-counter repo-details-container">
      <div className=" details-row details-img">
        <img src={details.owner.avatar_url} alt="avatar" />
      </div>
      <div className="details-row">
        <label className="label">Name:</label>
        <span className="value">{details.name}</span>
      </div>
      <div className="details-row">
        <label className="label">Watchers:</label>
        <span className="value">{details.watchers_count}</span>
      </div>
      <div className="details-row">
        <label className="label">Forks:</label>
        <span className="value">{details.forks_count}</span>
      </div>
      <div className="details-row">
        <label className="label">Open Issues:</label>
        <span className="value">{details.open_issues_count}</span>
      </div>
    </div>
  );
}
