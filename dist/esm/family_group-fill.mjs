export const name="family_group-fill";
export const id="dl_db5b9725dc89b6aad328";
export const url=new URL("../icons/family_group-fill.svg?v=9ab7b92b7bf5e2df8a1068cb7ebe2a805c18446cb50ce32b2b8e9a543eaa50d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
