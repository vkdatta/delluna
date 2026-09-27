export const name="lucid_3-move-down";
export const id="dl_cf16da18b3fd4d1295fa";
export const url=new URL("../icons/lucid_3-move-down.svg?v=51bccabe2e6e36beee72c7f8ced20de6240c3e738227ca8dafc67f5e46e1ce7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
