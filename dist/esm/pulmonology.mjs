export const name="pulmonology";
export const id="dl_c3db134e74fe20e1bd1c";
export const url=new URL("../icons/pulmonology.svg?v=2267cd7fd945de629591988c58b0bf73287dd9216b379a7cb8d6060478b8a47e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
