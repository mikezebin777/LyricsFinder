// 按照关键字搜索歌曲
// --歌曲名title
export const filterByKeyword = ( keyword, songs ) => {
  console.log(`searching by keyword "${keyword}" ...`);
  return (
    songs.filter(song => song.title.indexOf(keyword) >= 0 )
  );
}