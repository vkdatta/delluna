export const name="pinwheel-light";
export const id="dl_fef04167254d4a9f83d3";
export const url=new URL("../icons/pinwheel-light.svg?v=e5b518694457926682a0138f14a7b2a9e90c1aaea71c6fadd6a2e5804e982e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
