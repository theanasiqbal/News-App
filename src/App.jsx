import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Card from './Components/card'
import SelectComponent from './Components/select'
import CountrySelect from './Components/country'


function App() {
  const [news, setNews] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [sort, setSort] = useState('publishedAt')
  

  
  const getNews = async (some, sort) => {
      const data = await fetch(`https://newsapi.org/v2/everything?q=${some}&sortBy=${sort}&pageSize=20&apiKey=887ecc3d80304d078381ef900f8a1127`);
      const resp = await data.json();
      setNews(resp.articles || []);
    }


    const Search = () => {
      getNews(inputValue, sort);
    };

    useEffect(()=>{
      Search();
    },[sort])

  return (
    <>

      <Navbar inputValue={inputValue} setInputValue={setInputValue} onsearch={Search}/>
      
      <div className='flex justify-evenly mt-5'>
      <SelectComponent sort={sort} setSort={setSort} />
      {/* <CountrySelect country={country} setCountry={setCountry} /> */}
      </div>

      <div className='flex flex-wrap gap-2 justify-evenly mt-10 '>
      
      {news.map((data, index) => (
      <Card
      key={index}
      image={data.urlToImage || 'https://via.placeholder.com/400'}
      title={data.title || 'No Title'}
      description={data.description || 'No Description'}
      url={data.url}
  />
        ))}

      </div>
    </>
  )
}

export default App
