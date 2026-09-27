export const name="lucid_3-map-pin-x-inside";
export const id="dl_c94b2d5ba43f49cfbaf2";
export const url=new URL("../icons/lucid_3-map-pin-x-inside.svg?v=15dbe36dc53fe8f2021f8b1ddec254b10cb16beda88b8113710452850e62e53f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
