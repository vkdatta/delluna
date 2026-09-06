export const name="faders-light";
export const id="dl_7f619f1d5cb44850983e";
export const url=new URL("../icons/faders-light.svg?v=2025952c29bc34f191fcc6992db59f918283330fb8659c177e660137369007ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
