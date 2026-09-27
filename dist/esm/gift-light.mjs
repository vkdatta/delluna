export const name="gift-light";
export const id="dl_fe17e3214f89478f81bb";
export const url=new URL("../icons/gift-light.svg?v=1430dfcc4b04ac58a9235e7e31a4e46a22531a6e7b9e0ace23887c811837451a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
