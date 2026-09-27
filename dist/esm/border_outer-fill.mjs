export const name="border_outer-fill";
export const id="dl_c1cd9c6edb794df0b01d";
export const url=new URL("../icons/border_outer-fill.svg?v=b552947979974ed9418a1d4b863be8cc328585bf113929b586b16c6b2340c0fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
