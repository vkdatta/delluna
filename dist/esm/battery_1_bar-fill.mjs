export const name="battery_1_bar-fill";
export const id="dl_a8a9e29f45e2c0ee651d";
export const url=new URL("../icons/battery_1_bar-fill.svg?v=7e2c7c8bf1499914ca82936a20575186d47fd1b5cb9b24b1aaed18d473dbb41d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
