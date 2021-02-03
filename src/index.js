import React from 'react'
import styles from './styles.module.css'

const ReactMinimalProgressSteps = ({
  data,
  selectedItemId = 1,
  returnSelectedItemId = () => {}
}) => {
  const [currentActive, setCurrentActive] = React.useState(selectedItemId)

  const handleNext = () => {
    let newCurrentActive
    if (currentActive > data.length) {
      newCurrentActive = data.length
    } else {
      newCurrentActive = currentActive + 1
    }
    setCurrentActive(newCurrentActive)
    returnSelectedItemId(newCurrentActive)
  }
  const handlePrev = () => {
    let newCurrentActive
    if (currentActive < 1) {
      newCurrentActive = 1
    } else {
      newCurrentActive = currentActive - 1
    }
    setCurrentActive(newCurrentActive)
    returnSelectedItemId(newCurrentActive)
  }

  const handleCircleClick = (item) => {
    returnSelectedItemId(item.id)
    setCurrentActive(item.id)
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
            key={item.id}
            className={`${styles.circle} ${
              currentActive > item.id
                ? styles.active
                : currentActive == item.id && styles.current
            }`}
            onClick={() => handleCircleClick(item)}
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
