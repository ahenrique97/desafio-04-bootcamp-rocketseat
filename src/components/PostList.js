import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Agostinho Carrara",
          avatar: "https://i.pravatar.cc/150?img=3"
        },
        date: "04 Jun 2019",
        content: "Fala rapazeada, tudo tranquilo com vcs?",
        comments: [
          {
            id: 2,
            author: {
              name: "Severino Risca-Faca",
              avatar: "https://i.pravatar.cc/150?img=4"
            },
            date: "04 jun 2019",
            content: "To bem, e vc meu glorioso?"
          },
          {
            id: 3,
            author: {
              name: "Clebim Oliveira",
              avatar: "https://i.pravatar.cc/150?img=8"
            },
            date: "05 jun 2019",
            content: "Num to bem, fala comigo não"
          }
        ]
      },
      {
        id: 4,
        author: {
          name: "Silvio Santos",
          avatar: "https://i.pravatar.cc/150?img=18"
        },
        date: "10 Jun 2019",
        content:
          "Mahoooooe você já jogou na tele sena da sorte? São vários prêmios que deixarão você milionário mas olha só mas olha só hihihaha quem quer dinheiro?",
        comments: [
          {
            id: 4,
            author: {
              name: "Luiz Roberto",
              avatar: "https://i.pravatar.cc/150?img=21"
            },
            date: "10 Jun 2019",
            content:
              "Eu já joguei e já ganhei milhares de dólares mas olha só mas olha só hihihaha?"
          },
          {
            id: 6,
            author: {
              name: "Patrícia Abravanel",
              avatar: "https://i.pravatar.cc/150?img=20"
            },
            date: "10 Jun 2019",
            content:
              "Mahoooooe você já jogou na tele sena da sorte? São vários prêmios que deixarão você milionário mas olha só mas olha só hihihaha quem quer dinheiroMahooooo eMahooooo eMahooooo eMahoo oooeMah ooooo eMahoooooeM ahoooooe?"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postList">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
