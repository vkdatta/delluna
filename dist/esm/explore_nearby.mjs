export const name="explore_nearby";
export const id="dl_6fc0fe20f7a2a7da801e";
export const url=new URL("../icons/explore_nearby.svg?v=90090ddff503ffa1fc8cdf60e1c26c2bc036dc1d790b41558c3a2d52f12deeae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
