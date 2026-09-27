export const name="light_mode_auto-fill";
export const id="dl_8d45484d44f787282b80";
export const url=new URL("../icons/light_mode_auto-fill.svg?v=8fe6d12625e7acc9ce91d865d14d1a4bf768caff74eef48c7413f05840be7991",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
