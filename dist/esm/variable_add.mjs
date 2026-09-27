export const name="variable_add";
export const id="dl_5956b69ab7c1c5efaa1e";
export const url=new URL("../icons/variable_add.svg?v=c001339ef8d05248cd9c8aab428ac287e77b9320b3412f65b3bd6b1a08a5c893",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
