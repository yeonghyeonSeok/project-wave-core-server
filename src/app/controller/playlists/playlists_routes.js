const express = require('express');
const router = express.Router({mergeParams: true})

// //defualt로 생성되는 플레이리스트
// router.use('/default', require('./default'));

// //custom 플레이리스트
// router.use('/custom', require('./custom'));

// //top 10 목록 조회
router.use('/top10', require('./top10List'));

// //playlist에 담긴 song 추가, 삭제
// router.use('/:playlist_idx/songs/:songIdx', require('./managePlaylistSongs'));

// //playlist 목록 관리
// router.use('/', require('./managePlaylist'));

module.exports = router;