export const name="arrow-bend-double-up-left-fill";
export const id="dl_8c9ec96c67f54f23821a";
export const url=new URL("../icons/arrow-bend-double-up-left-fill.svg?v=bd46488640607b114d8a94f6737e8c3538a6c2d33664649813431185fd7cf5dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
