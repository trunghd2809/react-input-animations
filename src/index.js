import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const ReactInputAnimations = (props) => {
  const { label, type, name, onChange } = props
  return (
    <div className={styles.input_wrapper}>
      <input
        type={type}
        name={name}
        autoComplete='off'
        required
        onChange={(event) => {
          const textVal = event.nativeEvent.target.value
          if (typeof onChange === 'function') {
            onChange(textVal)
          }
        }}
      />
      <label htmlFor='name' className={styles.label_wrapper}>
        <span className={styles.label_content}>{label}</span>
      </label>
    </div>
  )
}

ReactInputAnimations.propsType = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func
}
ReactInputAnimations.defaultProps = {
  label: 'Name',
  type: 'text',
  name: 'name',
  onChange: null
}
