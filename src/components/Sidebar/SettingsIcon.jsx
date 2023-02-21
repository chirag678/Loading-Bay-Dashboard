import React, { useState } from 'react'
import { RiSettings5Fill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const SettingsIcon = () => {
  const [rotating, setRotating] = useState(false);

  return (
    <motion.div
      style={{ position: 'fixed', top: 11.5, left: 57 }}
      animate={rotating ? { rotate: 360 } : { rotate: 0 }}
      transition={{ duration: 0.85 }}
      onClick={() => setRotating(!rotating)}
    >
      <RiSettings5Fill />
    </motion.div>
  )
}


export default SettingsIcon