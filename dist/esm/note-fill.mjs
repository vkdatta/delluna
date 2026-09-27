export const name="note-fill";
export const id="dl_964e40c773ff4d04b3e9";
export const url=new URL("../icons/note-fill.svg?v=ec8d244e6b7632e0978ad8140d147172579be2e209d480b579211a28f4a303b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
