export const name="crosshair-simple-duotone";
export const id="dl_a05848b487bb41198b27";
export const url=new URL("../icons/crosshair-simple-duotone.svg?v=c296176ee93496d0b31e908f67b3f35eacf25ea3cda4030a20cad2ad27d16edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
