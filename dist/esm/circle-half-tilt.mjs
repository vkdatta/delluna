export const name="circle-half-tilt";
export const id="dl_1fe03dca125149dba5c7";
export const url=new URL("../icons/circle-half-tilt.svg?v=c25d7d8f50cc4b72a13f70da748a20c63decb1eaf7ea187c1e436e840f8e8519",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
