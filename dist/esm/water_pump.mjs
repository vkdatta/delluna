export const name="water_pump";
export const id="dl_b738ef5d34c2198c7b18";
export const url=new URL("../icons/water_pump.svg?v=c318df13d87b85374c795f90998491f049c5ac714f88879a9972c22c5f043481",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
