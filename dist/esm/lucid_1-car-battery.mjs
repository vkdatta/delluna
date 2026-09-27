export const name="lucid_1-car-battery";
export const id="dl_d81d6c5012cc462a9ada";
export const url=new URL("../icons/lucid_1-car-battery.svg?v=2c330c900acf0acb30be0292247a8ba7d6b5e2a7847c296af5c8587c49d15625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
