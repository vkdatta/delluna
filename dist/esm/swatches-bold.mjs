export const name="swatches-bold";
export const id="dl_c0926acf3d0d29e5b260";
export const url=new URL("../icons/swatches-bold.svg?v=47592ff2b3ac45b2fe07f0781d27c83d0e162094e86e3d907069e5deb6e58f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
