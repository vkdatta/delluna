export const name="arrow-u-right-up-fill";
export const id="dl_2418d4fbb98247efa41b";
export const url=new URL("../icons/arrow-u-right-up-fill.svg?v=5d9675e9533415b9e3dd38025ee4665a90692c93d3ed67ff60162f8e9a01b61d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
