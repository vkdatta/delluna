export const name="ink_eraser_off";
export const id="dl_3c35ca2dc059d0f5210f";
export const url=new URL("../icons/ink_eraser_off.svg?v=75143ebb80db788f2976fc1a1fac9d7786d18cf59cfdd8c8b90b3620af739904",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
