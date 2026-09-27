export const name="general_device-fill";
export const id="dl_7623b3b23d02cc493c45";
export const url=new URL("../icons/general_device-fill.svg?v=804ddff5374a5d213916815575b6f54a73f38020d021799e045aa6807a294a8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
