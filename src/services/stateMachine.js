// render() {
//   const { query, setOfImages, page, error, status, showModal, bigImg } =
//     this.state;

//   if (status === 'idle') {
//     return (
//       <>
//         <Searchbar
//           query={query}
//           handleChange={this.handlChangeQuery}
//           onSubmit={this.handleSubmit}
//         />
//         <ToastContainer
//           position="top-right"
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           autoClose={3000}
//         />
//       </>
//     );
//   }

//   if (status === 'pending') {
//     return (
//       <>
//         <Searchbar
//           query={query}
//           handleChange={this.handlChangeQuery}
//           onSubmit={this.handleSubmit}
//         />
//         <Loader />
//       </>
//     );
//   }

//   if (status === 'rejected') {
//     return (
//       <>
//         <h1>{error.message}</h1>;
//       </>
//     );
//   }

//   if (status === 'resolved') {
//     return (
//       <>
//         <Searchbar
//           query={query}
//           handleChange={this.handlChangeQuery}
//           onSubmit={this.handleSubmit}
//         />
//         <ImageGallery
//           images={setOfImages}
//           page={page}
//           selectPicture={this.onPictureClick}
//           onOpen={this.openModal}
//         />
//         {showModal && <Modal image={bigImg} onClose={this.closeModal} />}
//         {setOfImages.length > 0 && <Button onLoadMore={this.onLoadMore} />}
//       </>
//     );
//   }
// }
