const ReportCard = ( { report }) => {
    
return (
    <div className="report-card">
        <h3>{report.name}</h3>
        <p>{report.email}</p>
        <div className="message">{report.message}</div>
    </div>
)
}

export default ReportCard