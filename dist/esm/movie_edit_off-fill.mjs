export const name="movie_edit_off-fill";
export const id="dl_113f5262accd9e3c9873";
export const url=new URL("../icons/movie_edit_off-fill.svg?v=b99ca15c213272589b8967f6cb94eb1a21bbd687f22df65a7f1b2920dd4a6a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
