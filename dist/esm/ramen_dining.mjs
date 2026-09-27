export const name="ramen_dining";
export const id="dl_981d9a4445e637462855";
export const url=new URL("../icons/ramen_dining.svg?v=61bcd45b034d36b0c0255b8f168555c9dc6c6a4812f9a160f5ca033708b59795",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
