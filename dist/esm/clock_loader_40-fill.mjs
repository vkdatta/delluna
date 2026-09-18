export const name="clock_loader_40-fill";
export const id="dl_9c8f337bd4214e3ca9c1";
export const url=new URL("../icons/clock_loader_40-fill.svg?v=2c06a00e45251f8eacd6115cb64f922d00dcdb20fa45c065010098fc16a8ded0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
