export const name="flag_2-fill";
export const id="dl_73a4487897286a344c0b";
export const url=new URL("../icons/flag_2-fill.svg?v=c2ac3d3f03d393d66a0ec2c3fb8a1ba56e0ff98574561284f816d92411808a90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
