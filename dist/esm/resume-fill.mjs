export const name="resume-fill";
export const id="dl_ddff91d7d5566c4f8b11";
export const url=new URL("../icons/resume-fill.svg?v=ce3e10ca8cf01c89a425b66990cf5e72eed055ccddaf6db4ba204e2ea4b7eada",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
