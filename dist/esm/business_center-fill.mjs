export const name="business_center-fill";
export const id="dl_8675f9f890f4ea684b14";
export const url=new URL("../icons/business_center-fill.svg?v=09ef758bdf9ae0fc6361e23047115342ab32576c94a150a472a95e41bd74918f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
