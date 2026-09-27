export const name="divide";
export const id="dl_8e15e7b1d5334e06a072";
export const url=new URL("../icons/divide.svg?v=be68302c52a24af9405da8f6bede371e9ed35085d67a0ebf48b227acc16966cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
