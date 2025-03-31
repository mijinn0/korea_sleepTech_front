import React from 'react'

function E_JSX() {
  // https://cdn.pixabay.com/photo/2017/04/30/18/33/kittens-2273598_1280.jpg

  const cat = {
    catUrl: 'https://cdn.pixabay.com/photo/',
    description: '2017/04/30/18/33/',
    imageId: 'kittens-2273598_1280.jpg',
    name: '아기고양이',
    imageTheme: {
      width: '200px',
      height: '150px'
    },
    theme: {
      backgroundColor: 'black',
      color: 'white'
    }
  }

  return (
    <>
      <div style={cat.theme}>
        <p>{cat.name}'s Picture</p>
        <img
          src={cat.catUrl + cat.description + cat.imageId}
          alt={cat.name}
          width={cat.imageTheme.width}
          height={cat.imageTheme.height}
        />
      </div>
    </>
  )
}

export default E_JSX