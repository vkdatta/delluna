export const name="align-right-bold";
export const id="dl_13b322bc236f4c11912a";
export const url=new URL("../icons/align-right-bold.svg?v=d6ecb6f39a68d0b04af181ca568a13a48c0b20f125ed8270928501782fd0260b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
