export const name="lucid_3-map-pinned";
export const id="dl_6df0129632644f6497b3";
export const url=new URL("../icons/lucid_3-map-pinned.svg?v=2dc945f49121853415c4b70522700593d1fcbec7a5874419e4b4e0c1908b8725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
