export const name="towel-fill";
export const id="dl_b246f7ab47cb4db19d24";
export const url=new URL("../icons/T/towel-fill.svg?v=4402c1ebfcfffb16e2b506e9d9889f8884e639569cf6458550029c047a0cc78e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
