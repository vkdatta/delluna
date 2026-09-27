export const name="lucid_3-send";
export const id="dl_8d00aedec33444ea8191";
export const url=new URL("../icons/lucid_3-send.svg?v=4eaa512d08e27b01a327eb184d4ec376c27f9892663b17416ee7ecd90b39bbd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
