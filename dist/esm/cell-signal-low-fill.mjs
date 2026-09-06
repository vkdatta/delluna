export const name="cell-signal-low-fill";
export const id="dl_bcff90f8f36241cc9b16";
export const url=new URL("../icons/cell-signal-low-fill.svg?v=7d9daac363209d0bb339ba91732c2f5dff24041c0ef02a6dcb2e448596074db2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
