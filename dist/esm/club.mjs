export const name="club";
export const id="dl_371c2382843640eda245";
export const url=new URL("../icons/club.svg?v=c6674dfce7ffbb0e4668f14b9a330a822d044d2d3f14042e65fb928b660ba2d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
