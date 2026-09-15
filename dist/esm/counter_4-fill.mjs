export const name="counter_4-fill";
export const id="dl_ac597a67a1ba4f91ab2d";
export const url=new URL("../icons/C/counter_4-fill.svg?v=ace98544715624f7c5259cfb44ab8123f2dd8d08cefc0adec5cb3cce36b4ccdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
