import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis con ...",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis con ...",
    },
    {
      id: 3,
      title: "My 3nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis con ...",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis con ...",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={posts} />} />
        <Route path="post">
          <Route index element={<NewPost />} />
          <Route path=":id" element={<PostPage />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );

  // return (
  //   <Routes>
  //     <Route
  //       path="/"
  //       element={<Layout search={search} setSearch={setSearch} />}
  //     >
  //       <Route index element={<Home posts={searchResults} />} />
  //       <Route path="post">
  //         <Route
  //           index
  //           element={
  //             <NewPost
  //               handleSubmit={handleSubmit}
  //               postTitle={postTitle}
  //               setPostTitle={setPostTitle}
  //               postBody={postBody}
  //               setPostBody={setPostBody}
  //             />
  //           }
  //         />
  //         <Route
  //           path=":id"
  //           element={<PostPage posts={posts} handleDelete={handleDelete} />}
  //         />
  //       </Route>
  //       <Route path="about" element={<About />} />
  //       <Route path="*" element={<Missing />} />
  //     </Route>
  //   </Routes>
  // );
}

export default App;
