export const name="arrow-fat-line-left-light";
export const id="dl_4bd1c9ad52f943eea14f";
export const url=new URL("../icons/arrow-fat-line-left-light.svg?v=74a954e28fcd3421740b973fbd52614fb5a3d887fa3ece8ab95eae156b35f688",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
