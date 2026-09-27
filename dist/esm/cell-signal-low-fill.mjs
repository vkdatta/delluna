export const name="cell-signal-low-fill";
export const id="dl_bcff90f8f36241cc9b16";
export const url=new URL("../icons/cell-signal-low-fill.svg?v=6fcf9fafd40b5321747763e0a6a3f27a4c80464415a2dbf93ccc458e16b5dc0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
