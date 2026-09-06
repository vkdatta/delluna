export const name="lucid_3-server-crash";
export const id="dl_e8641441c2104045917b";
export const url=new URL("../icons/lucid_3-server-crash.svg?v=3092b85b307d9bcc21ee615eefd64797c5f8159b3a972fa79d1eb1426f1c1438",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
