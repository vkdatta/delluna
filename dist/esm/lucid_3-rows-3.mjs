export const name="lucid_3-rows-3";
export const id="dl_7eda0e258fea442cb9fe";
export const url=new URL("../icons/lucid_3-rows-3.svg?v=2313ad5265d8bce07712f2c65dbdd77aa52275037a0c3e9e231413a96252c7f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
