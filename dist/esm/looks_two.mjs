export const name="looks_two";
export const id="dl_f7c82b2327adf405624a";
export const url=new URL("../icons/looks_two.svg?v=a5950265f1151c49307d17330f28dc7858da3cc7c4a88a045bc6fc1f3880346a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
