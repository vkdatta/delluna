export const name="colorize-fill";
export const id="dl_3052c426e77040748010";
export const url=new URL("../icons/C/colorize-fill.svg?v=d6bf200720cdb58c441a0cafca2cdc644ccb9597e436b616e5ff28b8b57d3a0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
