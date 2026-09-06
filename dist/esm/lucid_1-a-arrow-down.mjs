export const name="lucid_1-a-arrow-down";
export const id="dl_99e16fe3de054ba595f1";
export const url=new URL("../icons/lucid_1-a-arrow-down.svg?v=4df276e13da5f471f91755a41b4116a054659cd5d94e1f3b91dc2d1591c36529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
