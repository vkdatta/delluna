export const name="mode_night-fill";
export const id="dl_4253009ce1f23934402a";
export const url=new URL("../icons/mode_night-fill.svg?v=31f194d3989a4cc3973ec2084235a60a07a2759380b33f0841b23be53fe31266",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
