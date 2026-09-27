export const name="location_disabled-fill";
export const id="dl_c00bccf5c729bc705d4d";
export const url=new URL("../icons/location_disabled-fill.svg?v=7bd6756a20388b71dfc7e3c3fc88841db81f58b995724fe8231d13f2c20e8ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
