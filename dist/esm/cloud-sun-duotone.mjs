export const name="cloud-sun-duotone";
export const id="dl_7fdcc94cb2394560b0ac";
export const url=new URL("../icons/cloud-sun-duotone.svg?v=e68c7bc5e7b693ee150a8523ce4d5c844e509554a33b359b506b28148d73f5ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
