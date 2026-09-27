export const name="caret-circle-left-duotone";
export const id="dl_07c6b11237c64303b626";
export const url=new URL("../icons/caret-circle-left-duotone.svg?v=1f49b46e3929325ab16e2e608e06354a0b150367ecd308439a1f2f2537bb76ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
