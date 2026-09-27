export const name="battery_horiz_050-fill";
export const id="dl_d49222787288b162be89";
export const url=new URL("../icons/battery_horiz_050-fill.svg?v=fac8908bb4d914e9bb3476ad61cbbcbf402a7219ad850e121c1976e57d4f241e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
