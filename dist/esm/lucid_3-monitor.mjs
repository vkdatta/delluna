export const name="lucid_3-monitor";
export const id="dl_48a6215e92344d998e13";
export const url=new URL("../icons/lucid_3-monitor.svg?v=f2c507ae9a4e34dda93146ca4d5ba95e5d3caf96d2d399e68006d155cbc1f435",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
