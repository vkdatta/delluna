export const name="shield_toggle-fill";
export const id="dl_dbab72bbc4b14df2a780";
export const url=new URL("../icons/shield_toggle-fill.svg?v=a14dc1ca9dfcd6ab957c75260f217ac5497f664aca875be35fec73000c9416fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
