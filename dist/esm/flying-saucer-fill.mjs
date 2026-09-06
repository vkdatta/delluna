export const name="flying-saucer-fill";
export const id="dl_e7f96558ecce4d5e8675";
export const url=new URL("../icons/flying-saucer-fill.svg?v=d01ced5952077600a8ca361adf0401eb854d35e6526547035a1c30b3208f7f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
