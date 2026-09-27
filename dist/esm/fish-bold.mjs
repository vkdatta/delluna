export const name="fish-bold";
export const id="dl_418b4ef4ff6846ecb5a5";
export const url=new URL("../icons/fish-bold.svg?v=04879d6df36d8ecc539ff053e0adfa7659a10da14f43f12c0219fa66e3dd7f60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
