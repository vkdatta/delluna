export const name="heart-half-light";
export const id="dl_e067b54456d946199150";
export const url=new URL("../icons/heart-half-light.svg?v=e0b11735f956594e310c8af65df332b6cd2643fc56c081c02eecf4a5d6ffb51e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
