import React from 'react'
import { ClimbingBoxLoader } from "react-spinners";

export default function Loading() {
  return (
    <div>
     <div className="container mx-auto flex justify-center items-center min-h-screen">
      <ClimbingBoxLoader color="#303082" />
    </div>
    </div>
  )
}
