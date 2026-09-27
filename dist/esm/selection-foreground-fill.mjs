export const name="selection-foreground-fill";
export const id="dl_973a37e08595c6340254";
export const url=new URL("../icons/selection-foreground-fill.svg?v=5d3ca829384f9f9ccb913f934cfc0b8681e148acc1aa547d0873bd357c20ba9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
