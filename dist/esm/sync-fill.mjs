export const name="sync-fill";
export const id="dl_b0e12b16f41341730e3d";
export const url=new URL("../icons/sync-fill.svg?v=c49280f59208288d214775df7b18f118189405f4b29af3728dc380083059a6dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
