export const name="humidity_high-fill";
export const id="dl_b9b423ddc32b46618800";
export const url=new URL("../icons/H/humidity_high-fill.svg?v=0a79f5d7e2893322d8e0e75ac186527297c86f2c55dcee360d1387c8da2d3136",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
