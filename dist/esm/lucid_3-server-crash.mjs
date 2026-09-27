export const name="lucid_3-server-crash";
export const id="dl_e8641441c2104045917b";
export const url=new URL("../icons/lucid_3-server-crash.svg?v=50c921bd6d94ff0ce17a69610d4b2c8c982b65d85fef42d19af6407e25358832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
