export const name="laptop_windows";
export const id="dl_70971074c04cf2c26b53";
export const url=new URL("../icons/laptop_windows.svg?v=9a2075285365d84ed71c7e77f3454e59d74ffcf956775addf6d31db303448352",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
