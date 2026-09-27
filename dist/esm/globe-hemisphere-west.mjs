export const name="globe-hemisphere-west";
export const id="dl_b1ee50cb576d4edd95aa";
export const url=new URL("../icons/globe-hemisphere-west.svg?v=78d137c827c9be81f1098738474b611cc3885e72ee441c21b2648130cc2688b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
