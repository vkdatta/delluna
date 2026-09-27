export const name="donut_small";
export const id="dl_16b26f9d2ef6b9abb532";
export const url=new URL("../icons/donut_small.svg?v=f758ae3d46fa02dde956d0c7e4e49612b7ac0970a8c1fe8f8520dfef85f572c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
