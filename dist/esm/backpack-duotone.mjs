export const name="backpack-duotone";
export const id="dl_53502dafab6944da8db1";
export const url=new URL("../icons/backpack-duotone.svg?v=3ba252d0e3c4169d8e894748d57c2dfc3ccc2ddee84725c7c3e979e0f4421b1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
