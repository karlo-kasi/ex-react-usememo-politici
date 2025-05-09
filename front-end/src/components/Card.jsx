export default function Card({ politici }) {
    return (
        <div className="row">
            {
                politici.map((p) => {
                    return (
                        <div key={p.id} className="col-4 mt-4">
                            <div className="card mb-3">
                                <img src={p.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.position}</p>
                                    <p className="card-text">{p.biography}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>



    )
}