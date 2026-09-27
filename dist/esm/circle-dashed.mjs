export const name="circle-dashed";
export const id="dl_d0fc016e80124d79a409";
export const url=new URL("../icons/circle-dashed.svg?v=bf67b6f769b556d371069d1f8bfa2a0c4dd8852605f1166c0ddb628cbdf4979b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
