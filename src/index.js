import React from 'react'
import styles from './styles.module.css'

const ReactMinimalProgressSteps = ({
  data = [{ id: 1, content: 'E' }],
  selectedItemId = 1,
  setSelectedItemId = () => {},
  nextButtonText = 'next',
  prevButtonText = 'prev'
}) => {
  const handleNext = () => {
    let newSelectedItemId
    if (selectedItemId > data.length) {
      newSelectedItemId = data.length
    } else {
      newSelectedItemId = selectedItemId + 1
    }
    setSelectedItemId(newSelectedItemId)
  }
  const handlePrev = () => {
    let newSelectedItemId
    if (selectedItemId < 1) {
      newSelectedItemId = 1
    } else {
      newSelectedItemId = selectedItemId - 1
    }
    setSelectedItemId(newSelectedItemId)
  }

  const handleCircleClick = (item) => {
    setSelectedItemId(item.id)
  }

  return (
    <div className={styles.container}>
      <div className={styles.progressContainer}>
        <div
          className={styles.progress}
          style={{
            width: `${((selectedItemId - 1) / (data.length - 1)) * 100}%`
          }}
        ></div>
        {data.length >= 2
          ? data.map((item) => (
              <div
                key={item.id}
                className={`${styles.circle} ${
                  selectedItemId > item.id
                    ? styles.active
                    : selectedItemId == item.id && styles.current
                }`}
                onClick={() => handleCircleClick(item)}
              >
                {item.content}
              </div>
            ))
          : 'Your items should be more than 1'}
      </div>

      <button
        className={styles.btn}
        disabled={selectedItemId === 1 ? true : false}
        onClick={handlePrev}
      >
        {prevButtonText}
      </button>
      <button
        className={styles.btn}
        disabled={selectedItemId === data.length ? true : false}
        onClick={handleNext}
      >
        {nextButtonText}
      </button>
    </div>
  )
}

export default ReactMinimalProgressSteps
