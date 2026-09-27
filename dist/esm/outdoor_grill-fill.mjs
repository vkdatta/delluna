export const name="outdoor_grill-fill";
export const id="dl_f210d0601f88b77c8b11";
export const url=new URL("../icons/outdoor_grill-fill.svg?v=d01a6416184476625d8e705243a3d1dd6e15ab5e9b6fc7876d7731575bd362df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
