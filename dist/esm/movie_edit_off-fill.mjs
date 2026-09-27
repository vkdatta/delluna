export const name="movie_edit_off-fill";
export const id="dl_1900fd1f698b0b620595";
export const url=new URL("../icons/movie_edit_off-fill.svg?v=6013897d98291171a9dfc7ee85e4d1ac2758b224bf0b80ebb166255089312a35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
