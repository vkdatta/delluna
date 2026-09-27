export const name="pin";
export const id="dl_04ac9d4bdabd802d8c96";
export const url=new URL("../icons/pin.svg?v=21a13ea1c08937d145824a16b318c6fa3f2a03ef93d9af5d00789e013bbfbdaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
