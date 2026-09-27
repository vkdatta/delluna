export const name="file_save-fill";
export const id="dl_92f1aaba6082baac8505";
export const url=new URL("../icons/file_save-fill.svg?v=abfaf5305d1623a1c5e09cdcd251ca799b9cf636aa4cb3f114d307cd0f2bb63d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
