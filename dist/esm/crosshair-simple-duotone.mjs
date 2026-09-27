export const name="crosshair-simple-duotone";
export const id="dl_a05848b487bb41198b27";
export const url=new URL("../icons/crosshair-simple-duotone.svg?v=6548f9e8323456416349c080195c05ca6aa826fdea371a48099f3a6b9476685d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
