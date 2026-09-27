export const name="arrows-out-simple-light";
export const id="dl_37655120ce6847459174";
export const url=new URL("../icons/arrows-out-simple-light.svg?v=fe3bac175ea46c0e9e913c97187330f30b7d0654f2d077065e23672a1595e6ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
