export const name="traffic-signal-light";
export const id="dl_16974ad3f05bc3f49fb1";
export const url=new URL("../icons/traffic-signal-light.svg?v=6eddf3949761e6490816cb3ba7b257c0d74824a695f858fd25646b89bc8dcd90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
