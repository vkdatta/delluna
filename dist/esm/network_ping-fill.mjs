export const name="network_ping-fill";
export const id="dl_615ebe0c0a3f4752b2d8";
export const url=new URL("../icons/N/network_ping-fill.svg?v=4ee717db843dd052068ca017e52ff84a339d56ca1014ddac3ec4c064d9f028f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
