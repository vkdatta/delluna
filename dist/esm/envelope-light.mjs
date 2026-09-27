export const name="envelope-light";
export const id="dl_1fc8d9ba9cc54da288f2";
export const url=new URL("../icons/envelope-light.svg?v=f9532d3fae78272aa2391566bc5749165655bf714566c07518588b8f22d05e29",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
