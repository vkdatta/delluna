export const name="encrypted-fill";
export const id="dl_cc7b14c2220b4db5a0d4";
export const url=new URL("../icons/encrypted-fill.svg?v=97b5422662288070bd7b76a9247ae7085e59460fcaff4a234fde53d79ffc5dea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
