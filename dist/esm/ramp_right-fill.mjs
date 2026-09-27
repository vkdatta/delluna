export const name="ramp_right-fill";
export const id="dl_1ecfa973ead769965554";
export const url=new URL("../icons/ramp_right-fill.svg?v=1622daff5663051e64e16b0e223af0e6ed9c98f92b9557425ed048e9d0006d8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
