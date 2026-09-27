export const name="network_ping-fill";
export const id="dl_fd538047d61f4c90a3e4";
export const url=new URL("../icons/network_ping-fill.svg?v=f5668c547bc4998e7f52f239488ef830713a7c6f3799da0d70976229362c4e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
