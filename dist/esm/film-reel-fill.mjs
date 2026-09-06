export const name="film-reel-fill";
export const id="dl_29eab8c395af43ffbc0f";
export const url=new URL("../icons/film-reel-fill.svg?v=64019cffa7e42957312bb5f0dfba87ff072bc55cf9b9410e8aab4a0d54e5357f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
