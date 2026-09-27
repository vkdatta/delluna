export const name="ice-cream-bold";
export const id="dl_a5db2543bf494a3da6cc";
export const url=new URL("../icons/ice-cream-bold.svg?v=a4db0c2e9d0830917287ba40cc2ad0065822beaaf5fdf0a96156d1aab591595f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
