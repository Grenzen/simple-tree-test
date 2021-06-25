import React, { useState } from 'react'
import { FileItem } from '../FileItem/FileItem'
// import { ReactSVG } from 'react-svg'

// import src from '../../assets/icons/folder.svg'

const { file_structure } = require('../../data/tree.json')

export const FolderItem = ({ folder }) => {
  const [children] = useState(file_structure.filter((elem) => elem.parent === folder.id))
  return (
    <>
      <details className="fs__details">
        <summary className="fs__folder">
          <div className="file-structure__icon-folder">
            { folder.name }
          </div>
        </summary>
          { children.length && children.map((item) => item.type === 'folder' ? (<FolderItem folder={item} children={file_structure.filter((elem) => elem.parent === item.id)} key={item.id} />) : (<FileItem file={item} key={item.id} />) )}
      </details>
    </>
  )
}