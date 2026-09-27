export const name="battery_horiz_075-fill";
export const id="dl_4b88717d16891f6a22d1";
export const url=new URL("../icons/battery_horiz_075-fill.svg?v=5b9558cc2c88906c3c8615a927c6f8c191f410b99e584da8c0a58c2dab2c103d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
