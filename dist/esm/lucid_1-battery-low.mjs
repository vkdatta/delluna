export const name="lucid_1-battery-low";
export const id="dl_c35d01c2b995442282c3";
export const url=new URL("../icons/lucid_1-battery-low.svg?v=352afcd9b81e3f92b9d2032d7d747a98b2efae592b6190a4ca492911d35393c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
