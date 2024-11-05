export default function CardDemo({ cardData }) {
    return (
        <>
            <div className="row">
                {
                    cardData.map((items) => {
                        const { id, name, image, address } = items;
                        return (
                            <>
                                <div className='col-3 mt-4'>
                                    <div className='card' key={id}>
                                        <div className="card-body">

                                            <img src={image} alt="" />
                                            <div className="row py-3">
                                                <div className="col-3">
                                                    <label className='my-2'>{id}</label>
                                                </div>
                                                <div className='col-9'>
                                                    <h4 className="card-title">{name}</h4>
                                                    <p className="card-text">{address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
