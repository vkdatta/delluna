export const name="horizontal_split-fill";
export const id="dl_02bdc0ee86d858c9763b";
export const url=new URL("../icons/horizontal_split-fill.svg?v=7a7a1ce2278070d95778a40fe8652e36e4184f6a982b9748a56088284c5d05f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
