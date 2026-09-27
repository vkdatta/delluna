export const name="wifi_proxy";
export const id="dl_b909cf9b1a0574280ee1";
export const url=new URL("../icons/wifi_proxy.svg?v=684ce1622fe50203f2422ddf67124d4dcfd20f6d7afca4fa8f62ceeebcf6651d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
