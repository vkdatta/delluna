export const name="arrow_downward-fill";
export const id="dl_9bfa48203d65adcbe850";
export const url=new URL("../icons/arrow_downward-fill.svg?v=12b1b1cb0f1dcb8603a0fd4f778b7bbdfd45a3445aa8d3bef9631a7a9017c766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
