import React from 'react'
import { useAxiosGetData } from "../components/services/useCustomState";

const initialUrl = "https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png";

export default function Page3() {
  const { data: data} = useAxiosGetData(initialUrl);
  
  return (
    <div className="mainContents">
      
    </div>
  )
}
