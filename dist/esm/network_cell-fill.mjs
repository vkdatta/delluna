export const name="network_cell-fill";
export const id="dl_7519e6d4a30de332a6c1";
export const url=new URL("../icons/network_cell-fill.svg?v=6d5bf753ca3ba103acdb954c0b5aafeed0a42a365e255de78e22062ed4a40cbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
