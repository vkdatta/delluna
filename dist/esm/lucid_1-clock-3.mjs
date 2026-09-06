export const name="lucid_1-clock-3";
export const id="dl_12e53706dba0446c9940";
export const url=new URL("../icons/lucid_1-clock-3.svg?v=c4a160c0fc05b01b9d28851aebe2c08ec62ffd33447e42c77ff95777f68647cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
