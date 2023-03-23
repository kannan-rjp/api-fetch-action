// import { connect } from 'react-redux'

// // const service ={
// //     getData: ()=>{
// //         return new Promise(resolve, reject)=>{
// //             resolve({

// //             })
// //         }
// //     }
// // }
// const service = ({userpost})=> {
//     getData: ()=>{
//                 return new Promise((resolve, reject)=>{
//                     resolve({
//                         count: userpost?.data?.length,
//                         data: userpost?.data
//                     })
//                 }) 
//             }
// }
// console.log(service.getData,'this is count data from service')
// const mapStateToProps = (state) =>({
//     userpost: state.userreducer.userpost,
//     //userinfo: state.particularreducer.userinfo
//   });
//   export default connect(mapStateToProps)(service);