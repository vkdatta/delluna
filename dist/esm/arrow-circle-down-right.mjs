export const name="arrow-circle-down-right";
export const id="dl_86fd978a7d2a4762b6f1";
export const url=new URL("../icons/arrow-circle-down-right.svg?v=50986966bfed327e47134ccc21280948c62e3f844065afdf7c25e15bb720e42a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
