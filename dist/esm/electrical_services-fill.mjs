export const name="electrical_services-fill";
export const id="dl_dbabfa5d537e4d089a5c";
export const url=new URL("../icons/E/electrical_services-fill.svg?v=9c87d9217a910fc68e5247b6826ea397547f963767eedbe71731ffeba8d12de0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
