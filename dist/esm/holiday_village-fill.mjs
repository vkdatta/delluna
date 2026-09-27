export const name="holiday_village-fill";
export const id="dl_ad5673a524459f29525c";
export const url=new URL("../icons/holiday_village-fill.svg?v=b19d329a884104707c3bb513eddb1c42f0e346a60387c85c2ccbc1f29d1e9a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
