/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './FileStructure.css'
import { ReactSVG } from 'react-svg'

import src from '../../assets/icons/folder.svg'
import src1 from '../../assets/icons/file.svg'

export const FileStructure = () => {
  return (
    <nav className="file-structure">
      <ul className="file-structure__ul">
        <li className="file-structure__li">
          <a href="#" className="file-structure__a file-structure__a-folder" rel="noopener noreferrer"><ReactSVG className="file-structure__icons" src={src} />root</a>
          <ul className="file-structure__ul">
            <li className="file-structure__li">
            <a href="#" className="file-structure__a file-structure__a-folder" rel="noopener noreferrer"><ReactSVG className="file-structure__icons" src={src} />subfolder 1</a>
              <ul className="file-structure__ul">
                <li className="file-structure__li">
                <a href="#" className="file-structure__a" rel="noopener noreferrer"><ReactSVG className="file-structure__icons" src={src1} />subsubfile 1</a>
                </li>
              </ul>
            </li>
            <li className="file-structure__li">
            <a href="#" className="file-structure__a file-structure__a-folder" rel="noopener noreferrer"><ReactSVG className="file-structure__icons" src={src} />subfolder 2</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}