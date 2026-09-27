export const name="lucid_1-cloud-alert";
export const id="dl_c11b1d4bf5cb497da3ff";
export const url=new URL("../icons/lucid_1-cloud-alert.svg?v=d854d7961088c11bc858c9900d8cfd96376fb96a1bbdf38b092b533fae90640d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
