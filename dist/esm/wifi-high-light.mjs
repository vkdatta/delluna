export const name="wifi-high-light";
export const id="dl_a019e84e0f6d1383d118";
export const url=new URL("../icons/wifi-high-light.svg?v=7b15e56e72d83f1559882d0d0597f5af4814d50cf2f627c628ee1aa30e22d9d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
