export const name="looks_one-fill";
export const id="dl_5fea26cd329bf985441c";
export const url=new URL("../icons/looks_one-fill.svg?v=4a37cb2238f353d3c47d91a71131fd58247b5c2a061e158c5a3e63c3a416cd9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
