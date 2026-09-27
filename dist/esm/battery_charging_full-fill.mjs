export const name="battery_charging_full-fill";
export const id="dl_19601f05381bbe668ef9";
export const url=new URL("../icons/battery_charging_full-fill.svg?v=11b49b888094ca932eb9f4dae61c22c7fbb51e32aa475676f63679b8d0950b66",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
