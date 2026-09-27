export const name="lucid_3-server-crash";
export const id="dl_e8641441c2104045917b";
export const url=new URL("../icons/lucid_3-server-crash.svg?v=cb9a5b47eef0ed267a3000e485742286bac8feec3e2982cc457bca03ac7bd275",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
