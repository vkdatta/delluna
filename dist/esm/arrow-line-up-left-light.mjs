export const name="arrow-line-up-left-light";
export const id="dl_d30b633393b54bfd8cf2";
export const url=new URL("../icons/arrow-line-up-left-light.svg?v=96b13e005897ce6c650b4c51dcd91da082a42099ab3dd599abb265eac975d077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
