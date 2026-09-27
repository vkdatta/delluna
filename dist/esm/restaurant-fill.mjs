export const name="restaurant-fill";
export const id="dl_2333f7e79fac3c5ef3ee";
export const url=new URL("../icons/restaurant-fill.svg?v=1d2682b0b4ec0b8dc62b1394c437e990fcc3f722abc5c1902fc20fe006d88400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
