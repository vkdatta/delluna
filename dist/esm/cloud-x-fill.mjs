export const name="cloud-x-fill";
export const id="dl_c5a80c6f77a14947896c";
export const url=new URL("../icons/cloud-x-fill.svg?v=5232374626c6972ee3e913ac4e81fa5ecd5eb14084ae0f340bb44530ac1b8a1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
