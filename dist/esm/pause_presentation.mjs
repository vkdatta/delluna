export const name="pause_presentation";
export const id="dl_a253a2407e6a4345b697";
export const url=new URL("../icons/pause_presentation.svg?v=6927a9a6581402a5788d6ef96ea126ca2d4c5945088a6cea6f2878a7378e928e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
