export const name="push-pin-simple-fill";
export const id="dl_2e11742160bc4264ac1b";
export const url=new URL("../icons/push-pin-simple-fill.svg?v=d4455c9406fb4c5c4e09697f8e10091975e3735f2e21454018251fd01225453f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
