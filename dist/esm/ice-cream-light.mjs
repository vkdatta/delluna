export const name="ice-cream-light";
export const id="dl_47c8c223c96e4bf2b2d8";
export const url=new URL("../icons/ice-cream-light.svg?v=2408a6f0e8190e6a877ce29cc9af70a42f0df3f67898e099fe1af498a8896fe9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
