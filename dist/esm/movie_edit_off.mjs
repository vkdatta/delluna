export const name="movie_edit_off";
export const id="dl_51df51fc9f1d45558e81";
export const url=new URL("../icons/movie_edit_off.svg?v=2e7044fb3d116a8319c41df3a4c9856ece54965535b85dde3f00664f064e521b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
