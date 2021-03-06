
const Home = ({ predictions, fbpredictions }) => {
    return (
        <div className="homepage">
            {predictions && [...Object.values(predictions)].map(pred => (
                <div key={pred.id}>
                    <p>{pred.id}</p>
                    <p>{pred.first_name}</p>
                    <p>{pred.gender}</p>
                    <p>{pred.ip_address}</p>
                    {/* <p>{pred.home_team}</p>
                    <p>{pred.away_team}</p>
                    <p>{pred.prediction}</p> */}
                </div>
            ))}
            {fbpredictions && <p>{JSON.stringify(fbpredictions)}</p>}

        </div>
        // <div className="homepage">
        //     <h1>Welcome to Free Football Tips</h1>
        //     <p>Welcome to Free Football Tips - providing free predictions for upcoming football matches, average bookie odds and performance monitoring for the statistical models. </p>
        //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore reiciendis ipsum exercitationem, adipisci quis recusandae non veniam consequatur nobis quibusdam quo iure vel ratione est, quisquam ipsam facere id! Obcaecati expedita quidem quos cupiditate enim explicabo incidunt asperiores, perferendis praesentium tempore fugiat soluta vero velit placeat nisi fugit! Quas delectus impedit minima accusantium laboriosam sequi mollitia quod molestias provident iste. Quod aliquid nisi id ea quisquam officia vitae sapiente dignissimos exercitationem quibusdam? Eius modi sapiente nam unde animi nesciunt voluptate officia quis doloremque, mollitia qui, quos aliquid explicabo deserunt impedit hic, doloribus veniam harum omnis. Doloremque ratione quos quas nostrum illo nobis delectus quam, quidem corporis quod velit? Necessitatibus, nulla. Commodi, ullam exercitationem est beatae ratione natus minus nam magnam temporibus delectus ab deserunt ea recusandae dignissimos fuga voluptates quaerat esse. Tenetur modi expedita dignissimos numquam quasi beatae error vel consectetur pariatur omnis nihil voluptatum voluptatibus suscipit dolores, corporis ad unde nulla fuga itaque ut ab perferendis. Culpa placeat architecto ipsum labore autem ullam nesciunt tenetur esse, nam velit fuga iusto fugiat quasi distinctio repellendus sunt! Dignissimos eius, ut voluptatum similique adipisci tenetur porro eveniet cumque suscipit? Sit labore accusantium ipsam animi dicta reprehenderit, velit quo doloremque, voluptatem vel ut.</p>
        //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatem eaque nemo harum possimus. Maiores quod saepe obcaecati? Consectetur, suscipit sed corporis exercitationem autem molestiae non iste voluptatum velit expedita nobis ducimus in accusamus? Illum voluptatibus incidunt, sit voluptatem eveniet reprehenderit neque laboriosam aperiam, magnam culpa quia. A laboriosam asperiores eum aspernatur ipsum quos quae est officia cum incidunt quisquam dolorum cumque quibusdam, deserunt voluptatibus! Totam ipsa quasi omnis velit eum dolorem cum laboriosam asperiores molestias ex saepe quae magnam possimus dicta est, nemo et aut ullam voluptatum a! Quisquam aliquid magni nostrum autem debitis cupiditate porro consectetur nihil sapiente excepturi quae, placeat odio voluptatum? Ducimus, ipsum ab laborum dolor possimus earum rerum. Doloribus ipsum explicabo provident eaque dicta nostrum consequuntur earum voluptate dignissimos? Expedita esse architecto neque officiis cum id optio magnam qui et omnis, aspernatur delectus in aliquid quis assumenda eveniet dolorum vitae ad dolore placeat labore nihil quibusdam rem temporibus. Tempore ea minus at? Ipsam dicta hic sed tempora aut impedit tenetur consequatur nihil eveniet quis corporis repellendus accusamus dolor optio, quas mollitia illo minima nam deserunt.</p>
        //     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum voluptas accusantium rem aperiam, repellat quas possimus nesciunt nulla aspernatur aliquam perferendis ex, repudiandae deleniti et. Ipsam doloribus corrupti a quaerat perferendis iure totam excepturi vitae quidem laborum, iste quibusdam, similique harum alias beatae, sit esse itaque temporibus fugit eius culpa. Enim, debitis? Ipsum nostrum vel ut molestias sint laudantium accusantium ea unde, quas velit! Sed veritatis neque explicabo placeat porro.</p>
        // </div>
    )
}

export default Home
