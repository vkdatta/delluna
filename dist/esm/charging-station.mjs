export const name="charging-station";
export const id="dl_e3ce3fdab553487591aa";
export const url=new URL("../icons/charging-station.svg?v=6b0c38dee32fee39aca516c58014b7cfdbd357c87a0adafcf5fc872c13129219",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
