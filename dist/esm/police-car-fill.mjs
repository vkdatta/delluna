export const name="police-car-fill";
export const id="dl_832845c4734e4a1aa43e";
export const url=new URL("../icons/police-car-fill.svg?v=189fee5d6d19380c987f156f9f1de9c07eb2bdcae15c88e666a58c2455d3a631",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
