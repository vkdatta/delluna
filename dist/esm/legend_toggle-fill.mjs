export const name="legend_toggle-fill";
export const id="dl_90dfe45b0f65957502c6";
export const url=new URL("../icons/legend_toggle-fill.svg?v=2f76fb88d4ad25aac93b4c1e8ce2e71b11cdcef539264663cf9ceef663f3c248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
