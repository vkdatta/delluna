export const name="network_cell-fill";
export const id="dl_4622a4ca4f8c413d8684";
export const url=new URL("../icons/N/network_cell-fill.svg?v=df17772bc43d88113991d196f1d7bbfa4db1009fc579c661ede5d50a2e05f996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
