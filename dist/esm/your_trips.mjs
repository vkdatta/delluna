export const name="your_trips";
export const id="dl_456b52cd16ea59036603";
export const url=new URL("../icons/your_trips.svg?v=bf0b6d3964d2c5065780511beeab4424f58a51c147d690c2f2c864f9d04bab8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
