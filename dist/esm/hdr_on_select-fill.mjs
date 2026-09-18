export const name="hdr_on_select-fill";
export const id="dl_5a05fbe0b2b24f86a5d3";
export const url=new URL("../icons/hdr_on_select-fill.svg?v=64f46d8f973341f56eff5fb96e126896ab58287dc4595976d143c2d7fffe701d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
