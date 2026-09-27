export const name="lab_research-fill";
export const id="dl_5cfefbea8931b702c860";
export const url=new URL("../icons/lab_research-fill.svg?v=2ac84bcdbf3a0accd0d3e77205c0c045659a695a9499c40bcdb07dd33ceebab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
