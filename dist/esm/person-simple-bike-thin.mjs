export const name="person-simple-bike-thin";
export const id="dl_448bfb9aa27c4fe688cc";
export const url=new URL("../icons/person-simple-bike-thin.svg?v=6c8a3d8b90289f7ba8902a68b5c9f085bb806974c948f341c713aed837388ac2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
