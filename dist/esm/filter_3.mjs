export const name="filter_3";
export const id="dl_2c1f8371d4938e31e2a2";
export const url=new URL("../icons/filter_3.svg?v=4377de28d051039ba24667ee042d798225d8b00b90a93de470a6ae881889f1bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
