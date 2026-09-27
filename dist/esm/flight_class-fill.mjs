export const name="flight_class-fill";
export const id="dl_56123fa422fb4a408144";
export const url=new URL("../icons/flight_class-fill.svg?v=290ea65f010aed15bf054d25124579aa0aeca4ebcf85a2712b2539bffa82ecbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
