export const name="armchair-bold";
export const id="dl_3892788a1fec40cda3c8";
export const url=new URL("../icons/armchair-bold.svg?v=d539a79a66c6b9214576868655531cd3db1af69528256d97e478c3fcfc3bdf6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
