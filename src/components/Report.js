import { supabase } from "../config/supabaseClient"
import { useEffect, useState } from 'react'
import ReportCard from "../components/ReportCard"

const Report = () => {
  const [fetchError, setFetchError] = useState(null)
  const [report, setReport] = useState(null)

  useEffect(() => {
    const fetchReport = async () => {
      const { data: report, error } = await supabase
        .from('form_entries')
        .select('*')

      if (error) {
        setFetchError('Could not fetch the report')
        setReport(null)
        console.log(error)
      }
      if (report) {
        setReport(report)
        setFetchError(null)
      }
    }

    fetchReport()
  }, [])

  return (
    <div className="page report">
      {fetchError && <p>{fetchError}</p>}

      {!report && <p>Loading...</p>}

      {report && report.length === 0 && (
        <p>No data found in table.</p>
      )}

      {report && report.length > 0 && (
        <div className="report">
          <div className="report-grid">
            {report.map((item) => (
              <ReportCard key={item.id} report={item} />  
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Report