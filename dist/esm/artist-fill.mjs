export const name="artist-fill";
export const id="dl_7a3c9c058866475eb985";
export const url=new URL("../icons/A/artist-fill.svg?v=b831883530897aad26cb1c9022e701cd06a94e709c90c8e3a3c7e5430bbff8c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
