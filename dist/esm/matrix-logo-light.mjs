export const name="matrix-logo-light";
export const id="dl_2467d8da66f04af49209";
export const url=new URL("../icons/matrix-logo-light.svg?v=e943dd12b4729adc530dec038cb85722e2ca1438c93d2515b8dc9ccfbe0c3198",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
