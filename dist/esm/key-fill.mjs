export const name="key-fill";
export const id="dl_dacd55e95b3f46b58b4f";
export const url=new URL("../icons/key-fill.svg?v=0ea9ec27ac6ed6c78c48f2d5d854abd10856d9f69d8d32b5d3a2c49b7f80b67a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
