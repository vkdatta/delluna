export const name="ar_stickers-fill";
export const id="dl_24187635e9484f0781ad";
export const url=new URL("../icons/ar_stickers-fill.svg?v=d5e206e331e4305b341cad77bbfa6c04d5396df4b2a77a022f73415f64229ee4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
