export const name="less-than-or-equal-fill";
export const id="dl_b7812a039e29443c9b38";
export const url=new URL("../icons/less-than-or-equal-fill.svg?v=20f0ab2c93a45d334bfed7cfa22318ba4440e76295297ed6a06717514961fd3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
