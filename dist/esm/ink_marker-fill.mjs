export const name="ink_marker-fill";
export const id="dl_e33402e090e14c0c864f";
export const url=new URL("../icons/ink_marker-fill.svg?v=07fb24d0ca644fb00efc1020a7189aedc33b77612c87424ffa5f9fcd28391962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
