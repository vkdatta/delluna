export const name="dishwasher-fill";
export const id="dl_1fcf2bf808346feb2dae";
export const url=new URL("../icons/dishwasher-fill.svg?v=d80f7d2eb35615076fd1103892c31f15fa00a022b3414f8eeee68c4bde5f7822",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
