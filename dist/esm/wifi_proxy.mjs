export const name="wifi_proxy";
export const id="dl_574c5dcb6dc8ea388d15";
export const url=new URL("../icons/wifi_proxy.svg?v=aaf229db311a52c9f7e9670213a72c89f327bead12b461f9f151f778a9a3c8a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
