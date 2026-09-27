export const name="movie_edit-fill";
export const id="dl_e4b1115b0c6d8aa55394";
export const url=new URL("../icons/movie_edit-fill.svg?v=465deb5001abcbb33c8f5e69c26b03263b05c1231a14d7aae48be424a6d4b771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
