import React from 'react'
import { FolderItem } from '../FolderItem/FolderItem'
import './FileStructure.css'

const { file_structure } = require('../../data/tree.json')

export const FileStructure = () => {
  return (
    <nav className="file-structure">
      <FolderItem folder={file_structure[0]} />
    </nav>
  )
}