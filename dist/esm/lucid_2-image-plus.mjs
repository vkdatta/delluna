export const name="lucid_2-image-plus";
export const id="dl_0e6588bc8fa34c8da0e4";
export const url=new URL("../icons/lucid_2-image-plus.svg?v=f1008eb8b8af2331c6db44ff57a64ccc2ec6aebb81f98c19ec6468edd91d8af4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
