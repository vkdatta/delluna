export const name="encrypted-fill";
export const id="dl_4e9f3257e5a9f9d399d1";
export const url=new URL("../icons/encrypted-fill.svg?v=97b5422662288070bd7b76a9247ae7085e59460fcaff4a234fde53d79ffc5dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
