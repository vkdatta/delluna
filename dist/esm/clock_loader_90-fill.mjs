export const name="clock_loader_90-fill";
export const id="dl_edaeb45fb13047c9b0d5";
export const url=new URL("../icons/C/clock_loader_90-fill.svg?v=fcddf0e0ff6b4236af5b870e6ad78f418951124cdc261f6fee05397d632e221c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
