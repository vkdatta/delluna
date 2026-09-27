export const name="filter_retrolux";
export const id="dl_ff4e5a09c3b067ba4e8e";
export const url=new URL("../icons/filter_retrolux.svg?v=a6e957e220b2be47b1d2792f54c50dfd787133603d9b7609c7485d7bc4db1962",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
