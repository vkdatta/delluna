export const name="truck-trailer-bold";
export const id="dl_2af92a52549fa8f6b55c";
export const url=new URL("../icons/truck-trailer-bold.svg?v=9047938df80c9b9c8a02d5910f4a69a2c40fa4e83319d37fceb98cb39ca16c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
