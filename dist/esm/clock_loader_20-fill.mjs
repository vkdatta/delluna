export const name="clock_loader_20-fill";
export const id="dl_10980d0810b94dbe9dd6";
export const url=new URL("../icons/clock_loader_20-fill.svg?v=5a3f56c5476285e51b32c1b047b064ae8512b7467e11ad6269734fe84a47b8a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
