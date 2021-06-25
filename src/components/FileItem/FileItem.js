import React from 'react'
// import { ReactSVG } from 'react-svg'

// import src from '../../assets/icons/file.svg'

export const FileItem = ({ file }) => {
  return (
    <div className="fs__file">
      <div className="file-structure__icon-file" disabled>
        { file.name }
      </div>
    </div>
  )
}