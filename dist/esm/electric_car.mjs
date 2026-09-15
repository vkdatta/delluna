export const name="electric_car";
export const id="dl_ad737026dc2a4b938ae9";
export const url=new URL("../icons/E/electric_car.svg?v=5284e7f9784d79dc88765859c96aef390356c88e2b3b4a5e5bc909a359db7662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
