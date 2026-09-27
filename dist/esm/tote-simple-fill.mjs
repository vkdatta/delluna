export const name="tote-simple-fill";
export const id="dl_7bf85a0b4de9edd8b7cf";
export const url=new URL("../icons/tote-simple-fill.svg?v=1a0098cd1d601a6601c2945a3c5908e00154b37574da3a3e9c8020ae9cadb176",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
