import styles from '../../styles/project.list.module.scss'
import CardProject from './CardProject'

export default function ProjectList() {
  const datas = [
    {
      id: 1,
      type: "Web Programming",
      title: "Example",
      description: "example description"
    },
    {
      id: 2,
      type: "Web Programming",
      title: "Example",
      description: "example description"
    },
    {
      id: 3,
      type: "Web Programming",
      title: "Example",
      description: "example description"
    },
    {
      id: 4,
      type: "Web Programming",
      title: "Example",
      description: "example description"
    }
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          {datas.map((data, idx) => (
            <div key={idx} className="col-md-4 d-flex justify-content-center align-items-center mb-4">
              <CardProject id={data.id} type={data.type} title={data.title} description={data.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
