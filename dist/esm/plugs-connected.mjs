export const name="plugs-connected";
export const id="dl_541b01d930b1400a97de";
export const url=new URL("../icons/plugs-connected.svg?v=cca84487a9a3b1a3c413576efe1fc400f119cfff59bcc5fc336e5b3d8e1788ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
