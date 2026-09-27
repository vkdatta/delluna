export const name="traffic_jam";
export const id="dl_0fe9593cdc9afde94a4b";
export const url=new URL("../icons/traffic_jam.svg?v=746dc60b5bf13e672b78e166078ef6f4dfdbd99fb9feb5d28a2f291009e8a3e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
