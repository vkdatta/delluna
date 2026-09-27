export const name="air_purifier-fill";
export const id="dl_3c56d51502e483c4a00e";
export const url=new URL("../icons/air_purifier-fill.svg?v=74d4d5a05dbcdd11d05129f3df80487d040b9e6bec455d34dbae271b7d9557d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
