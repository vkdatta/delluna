export const name="counter_1";
export const id="dl_4649fbfb81a6529b57fd";
export const url=new URL("../icons/counter_1.svg?v=ef58fdb2ea4dbfe824cfeac365592bb77e31a2315ed4960e3896405d3a4e6a1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
