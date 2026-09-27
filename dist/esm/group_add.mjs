export const name="group_add";
export const id="dl_b94155b2f5f3b632d7b0";
export const url=new URL("../icons/group_add.svg?v=8adc2ae5a2d2cba5a9ba7d53126cb57458e2e56d8bbda93b987e9cec8b506a85",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
