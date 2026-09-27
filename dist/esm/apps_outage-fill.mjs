export const name="apps_outage-fill";
export const id="dl_b37ef1337fad5146b34f";
export const url=new URL("../icons/apps_outage-fill.svg?v=1d4e3ec355e980e4be05d125b5b3a60a938de00412eaee443b28c9c457df3e54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
