export const name="add_location";
export const id="dl_56422686ffba5be88dd6";
export const url=new URL("../icons/add_location.svg?v=a0efe1881da64d0d24d1813baf931fc77a8aff81481b5b9e35b0c3427a58d0be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
