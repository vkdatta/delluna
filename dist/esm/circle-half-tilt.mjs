export const name="circle-half-tilt";
export const id="dl_1fe03dca125149dba5c7";
export const url=new URL("../icons/circle-half-tilt.svg?v=2cb70ff00e732b027aa61f79ae732a495a922cdd7f6253d16b9563f0a40499f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
