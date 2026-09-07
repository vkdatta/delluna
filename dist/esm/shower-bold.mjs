export const name="shower-bold";
export const id="dl_d2262bb7e38947a189b5";
export const url=new URL("../icons/S/shower-bold.svg?v=33f8bf3ae3e35339b0a7304781461f49c03d5ef26be51dd46231f5bec9a723ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
