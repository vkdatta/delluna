export const name="20mp-fill";
export const id="dl_3c595b121b1a40189ae1";
export const url=new URL("../icons/2/20mp-fill.svg?v=0b831e5d0e91886474f50623e6c6b251b8a50b188c4aa8db34895e259d056e5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
