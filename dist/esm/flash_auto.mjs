export const name="flash_auto";
export const id="dl_ce57dbd85d8b5fea69a7";
export const url=new URL("../icons/flash_auto.svg?v=f06e92fe6e96ed97b598ffce3e1406dee12013acb2305fecb3a7c3f0f0e16ddd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
