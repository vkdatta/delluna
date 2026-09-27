export const name="map-pin-simple";
export const id="dl_76c382afe89e496fb580";
export const url=new URL("../icons/map-pin-simple.svg?v=eb0ee5eee55aabc3ef3f15e14da664a92a0ed22cac5110cbb091241f16787adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
