export const name="map_pin_heart-fill";
export const id="dl_a25957a330d1738c9326";
export const url=new URL("../icons/map_pin_heart-fill.svg?v=d15d51a573ec45c24b39376d4d6247247bdad990c05820090998d44d2ff9e6ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
