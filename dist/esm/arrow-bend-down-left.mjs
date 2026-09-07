export const name="arrow-bend-down-left";
export const id="dl_4db399f43bc04f178fd3";
export const url=new URL("../icons/arrow-bend-down-left.svg?v=aac2ab7d8d91029abe6b9ff58d5b247eed901de1705244eaaeb907639bb095dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
