export const name="money-wavy-bold";
export const id="dl_893a0ff9de3945cf83cc";
export const url=new URL("../icons/money-wavy-bold.svg?v=ae82d25fb57b9c8c968e572baba14639bcb7a5723fc3d05507a5e7f583d3927d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
