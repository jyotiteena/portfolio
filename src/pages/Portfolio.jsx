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
      <main className="main mt-5">
        <div className="col-lg-7 mx-auto section-title" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p>Overall, my goal is to remain at the forefront of technological advancements, leveraging my skills to build impactful solutions and inspire others on their tech journeys.</p>
        </div>
        <NavList filterCat={filterCat} navList={navList}></NavList>
        <CardDemo cardData={serviceData} />
      </main>
    </>
  )
};

export default Portfolio;
