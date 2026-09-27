export const name="connected_tv-fill";
export const id="dl_22b797a0f9ee930b6dc5";
export const url=new URL("../icons/connected_tv-fill.svg?v=8b32703af954373b9802667a817ee07228c5d3c4cfba6bcc1e367de1d267a108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
