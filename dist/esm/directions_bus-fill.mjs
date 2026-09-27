export const name="directions_bus-fill";
export const id="dl_f44a19f43548c912f06d";
export const url=new URL("../icons/directions_bus-fill.svg?v=c613cec6acecf1fa79c40cb5ec8be45469f23fadda54e8c3fbda5b632dacd087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
