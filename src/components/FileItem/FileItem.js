import React from 'react'
import { ReactSVG } from 'react-svg'

import src from '../../assets/icons/file.svg'

export const FileItem = ({ file }) => {
  return (
    <div className="fs__file">
      <ReactSVG className="file-structure__icons" src={src} />{ file.name }
    </div>
  )
}