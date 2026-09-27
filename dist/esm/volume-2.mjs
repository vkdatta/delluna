export const name="volume-2";
export const id="dl_3aa48d2527f4447e83bb";
export const url=new URL("../icons/volume-2.svg?v=1561886025aab2bcad2ecd60a7ee4932f91bfd93e632c71f26f2375b5fd02582",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
