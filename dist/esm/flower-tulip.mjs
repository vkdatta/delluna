export const name="flower-tulip";
export const id="dl_a1c7bae40b6c484cb9cc";
export const url=new URL("../icons/flower-tulip.svg?v=43c9dcfd7ef2cad2c1477828a79cfa6cbde19f1933caf71f4eeea8a428de1af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
