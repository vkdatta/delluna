export const name="flame";
export const id="dl_96599f39126a48d4a7ae";
export const url=new URL("../icons/flame.svg?v=b16b56da02267f2499d0ed0bd93e6d8305ab2b83dfdb7897b8bd0b9a2e611aca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
