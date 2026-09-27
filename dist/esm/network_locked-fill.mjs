export const name="network_locked-fill";
export const id="dl_03705f92f20ec9000b59";
export const url=new URL("../icons/network_locked-fill.svg?v=4eb3bdaae99c79e13894f8ab0a99b1a75627d2c7bf178ff5901847147ffeaa40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
