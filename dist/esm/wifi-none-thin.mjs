export const name="wifi-none-thin";
export const id="dl_076ee5f8022be0fdc7ad";
export const url=new URL("../icons/wifi-none-thin.svg?v=d5be694339f318567e3d76657f04150393136d0d8ce9c6d91f14fef051fd8dd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
