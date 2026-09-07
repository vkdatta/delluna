export const name="train-fill";
export const id="dl_e12cf7883d2145aabc16";
export const url=new URL("../icons/T/train-fill.svg?v=559c7f2fbed4fe9cb1ccb38900b6a2f24f9c2d0ce3c77347dddeeca4c7914a08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
