export const name="ruler-fill";
export const id="dl_fcc24afd6cc9459685d6";
export const url=new URL("../icons/ruler-fill.svg?v=029db9b4bfb84e0ee829e6ed0668097b5be10e55d11af3871e417e5448c54d27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
