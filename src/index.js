import React from 'react'
import styles from './styles.module.css'

const ReactMinimalProgressSteps = ({ data }) => {
  const [currentActive, setCurrentActive] = React.useState(1)

  const handleNext = () => {
    if (currentActive > data.length) {
      setCurrentActive(data.length)
    } else {
      setCurrentActive(currentActive + 1)
    }
  }
  const handlePrev = () => {
    if (currentActive < 1) {
      setCurrentActive(1)
    } else {
      setCurrentActive(currentActive - 1)
    }
  }
  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{
            width: `${((currentActive - 1) / (data.length - 1)) * 100}%`
          }}
        ></div>
        {data.map((item) => (
          <div
            className={`${styles.circle} ${
              currentActive > item.id
                ? styles.active
                : currentActive == item.id && styles.current
            }`}
            onClick={() => setCurrentActive(item.id)}
          >
            {item.content}
          </div>
        ))}
      </div>

      <button
        className={styles.btn}
        id='prev'
        disabled={currentActive === 1 ? true : false}
        onClick={handlePrev}
      >
        Prev
      </button>
      <button
        className={styles.btn}
        disabled={currentActive === data.length ? true : false}
        onClick={handleNext}
      >
        Next
      </button>
    </div>
  )
}

export default ReactMinimalProgressSteps
