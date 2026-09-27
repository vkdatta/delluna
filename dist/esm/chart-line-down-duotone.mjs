export const name="chart-line-down-duotone";
export const id="dl_854896de0ad644dda19a";
export const url=new URL("../icons/chart-line-down-duotone.svg?v=a1df700c2366243c32b0b717b8ca0800d8c2e96643c93d9a0c6531486bceb6f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
