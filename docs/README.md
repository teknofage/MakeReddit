# YachtRocker

> How yachtrock are you?

[Click to visit the site.](https://www.google.com/)
<br>
`YachtRocker` is an api for rating music videos on their yacht score and their rocker score.
<br>

> When listening to music on your, or anyone else's yacht, there is an expectation that yacht rock music will be playing at least during cocktail hour. Both guests and hosts ought to now their good yacht rock music from their bad. How else would they know this without an internationally (un)recognized forum for rating yacht rock music videos?

## How to Install:
1) Clone this repo in your terminal:
` git clone https://github.com/teknofage/YachtRocker-API.git`
2) Open the folder and run the folling command:
`npm install`
3) To Launch, run:
`npm start`
or
`nodemon`


# Data

## Videos

Music videos are aximatic for yacht rockers, as one shoudl feel transported to a place that is softly lit, surrounded by water, and with the sounds of ice cubes gently clinking un between the choruses. In this API, the videos endpoint will convey the id of the video as well as the data associated with it.

### Endpoints

| Request  | Endpoint        | Description                                        |
| -------- | --------------- | -------------------------------------------------- |
| `GET`    | /videos         | Returns a list of all the videos and some of their data. |
| `GET`    | /videos/:id | Returns a single video and its associated data.   |
| `POST`   | /videos/:id | Creates a new video.                               |
| `PUT`    | /videos/:id | Updates a video.                                   |
| `DELETE` | /videos/:id | Deletes a video.                                   |

### View ALL videos

GET`http://localhost:3000/videos`<br><br>

```javascript
Response: Success (200)
Video:  {
  _id: 609b80474221d756a1555d68,
  comments: [],
  title: 'Key Largo - Bertie Higgis',
  url: 'https://www.youtube.com/watch?v=Ru2tsT32pHA&list=PLemLulPSDQ8uec7IBuwIQKswQKDZtEsp1&index=2ww.youtube.com/watch?v=Ru2tsT32pHA&list=PLemLulPSDQ8uec7IBuwIQKswQKDZtEsp1&index=2',
  summary: 'Some classic yacht music with accompanying fashions and hairdos',
  author: {
    _id: 60920e6587f3f882fe8404c5,
    posts: [
      60988a609b934804c2b12b3a,
      60987e3c2d16aed197537d61,
      60934f2d13ca0a2269179c17
    ],
    comments: [],
    username: 'Ernie',
    created_at: 2021-05-05T03:17:57.962Z,
    updatedAt: 2021-05-12T23:09:55.866Z,
    __v: 5,
    videos: [ 609c60437fc3bb45b545910d, 609b825368410b666f65aa38 ]
  },
  created_at: 2021-05-12T07:14:15.235Z,
  updatedAt: 2021-05-12T07:14:15.235Z,
  __v: 0
}
```

### Show Video  

GET`http://localhost:3000/videos/:id`<br><br>

_> number is the STRING that indicates the video's number._

```javascript
Response: Success (200)
Video:  {
  _id: 609b80474221d756a1555d68,
  comments: [],
  title: 'Key Largo - Bertie Higgis',
  url: 'https://www.youtube.com/watch?v=Ru2tsT32pHA&list=PLemLulPSDQ8uec7IBuwIQKswQKDZtEsp1&index=2ww.youtube.com/watch?v=Ru2tsT32pHA&list=PLemLulPSDQ8uec7IBuwIQKswQKDZtEsp1&index=2',
  summary: 'Some classic yacht music with accompanying fashions and hairdos',
  author: {
    _id: 60920e6587f3f882fe8404c5,
    posts: [
      60988a609b934804c2b12b3a,
      60987e3c2d16aed197537d61,
      60934f2d13ca0a2269179c17
    ],
    comments: [],
    username: 'Ernie',
    created_at: 2021-05-05T03:17:57.962Z,
    updatedAt: 2021-05-12T23:09:55.866Z,
    __v: 5,
    videos: [ 609c60437fc3bb45b545910d, 609b825368410b666f65aa38 ]
  },
  created_at: 2021-05-12T07:14:15.235Z,
  updatedAt: 2021-05-12T07:14:15.235Z,
  __v: 0
}
```

### Create New Video

POST`http://localhost:3000/videos/:id`<br><br>

| Data         | Key        | Type |
| ------------ | ---------- | ---- |
| video id | `"id"` | str  |

> Returns the id of the new video to confirm its creation

### Update Video

PUT`http://localhost:3000/videos/:id`<br><br>

_> number is the STRING that indicates the video's number._

| Data         | Key        | Type |
| ------------ | ---------- | ---- |
| video id | `"id"` | str  |

> Returns the new video number to confirm its creation

### Delete Video

DELETE`http://localhost:3000/videos/:id`<br><br>

| Data         | Key        | Type |
| ------------ | ---------- | ---- |
| video id | `"id"` | str  |

> Returns deletion message as well as (now deleted) video number

## Voting

Each video object keeps a running tally of how many 'yacht votes' it has received for evoking yachts, and another separate set of votes fot its 'rocker score', for how rock'n'roll the song is. User-submitted music videos are judged on a combination of the song and the content of the video.
                                 |

# Coming Soon
_>Soon the 'videos/update' and 'videos/delete' routes will work properly
