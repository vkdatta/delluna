export const name="split-horizontal";
export const id="dl_2e3b354bf41a9a873a62";
export const url=new URL("../icons/split-horizontal.svg?v=4c60374e1e62fad92cdcc3862a556741c5f9c79d6a6f5d4d986d20db93d867a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
