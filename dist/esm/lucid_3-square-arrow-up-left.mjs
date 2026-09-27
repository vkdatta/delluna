export const name="lucid_3-square-arrow-up-left";
export const id="dl_539a6b611cd942288e7b";
export const url=new URL("../icons/lucid_3-square-arrow-up-left.svg?v=166c49c655b72b1b0eaf676515fe2c9843c84660f14007de63f8e2c0ed3f5cd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
