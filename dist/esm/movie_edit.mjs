export const name="movie_edit";
export const id="dl_2e2ac1b6af430501c3ff";
export const url=new URL("../icons/movie_edit.svg?v=f0faf7257b3fe2f2ae866202dccf47c6fe2c5f13ca8ed067b772d938d46265c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
