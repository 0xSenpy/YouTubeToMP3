const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c34559ca92msh815d4b12649cd36p1fa3a5jsn6de9f4448099',
		'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
	}
};

const videoURL = document.getElementById('videoLink')

const findVideoID = (URL) => {
    if (URL.includes('=')) {
      return URL.substring(URL.indexOf('=') + 1)
    } else {
      return URL.substring(URL.lastIndexOf('/') + 1)
    }
  }


const getVideo = async () => {
    const URL = String(videoURL.value)
    const videoID = findVideoID(URL)
    const res = await fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${videoID}`, options)
    const data = await res.json()
    const downloadURL = data.link
    window.open(downloadURL);
}
