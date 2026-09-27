export const name="wifi_protected_setup-fill";
export const id="dl_9a7c42b78fb8851e7af2";
export const url=new URL("../icons/wifi_protected_setup-fill.svg?v=d1f1e25752aca3ae2ca67c3f50ee606335ab0365479cd9d9402c8b17243da66a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
