export const name="lucid_1-bell-check";
export const id="dl_f6f52c5c28d747719d0c";
export const url=new URL("../icons/lucid_1-bell-check.svg?v=bd1147292a76626f0547965b6eefa8b562a1f7a1ecfd822cf9348ca747a443aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
