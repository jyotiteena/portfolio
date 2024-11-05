import { useState } from 'react';
import portfolioList from '../layout/PortfolioList';
import NavList from '../layout/NavList';
import CardDemo from '../layout/CardDemo';

const Portfolio = () => {
  const [serviceData, setData] = useState(portfolioList);
  const uniData = [
    ...new Set(portfolioList.map((curEle) => {
      return curEle.category;
    })), "All",
  ]
  const [navList, setNavList] = useState(uniData);


  console.log(uniData);

  const filterCat = (category) => {
    if (category === 'All') {
      setData(portfolioList);
    } else {
      const filt = portfolioList.filter((curItem) => {
        return curItem.category === category;
      })

      setData(filt);
    }
  }
  return (
    <>
      <h2 className="text-center text-info py-3">Category</h2>
      <NavList filterCat={filterCat} navList={navList}></NavList>
      <CardDemo cardData={serviceData} />
    </>
  )
};

export default Portfolio;
