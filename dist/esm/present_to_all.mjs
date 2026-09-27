export const name="present_to_all";
export const id="dl_115dd69e13c5a621c619";
export const url=new URL("../icons/present_to_all.svg?v=fdd8a3aa1be34633d711d3e5c9030587a8126750a3995451530de124b9bbafd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
