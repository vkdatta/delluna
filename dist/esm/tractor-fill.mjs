export const name="tractor-fill";
export const id="dl_6851336d8613fbb0907b";
export const url=new URL("../icons/tractor-fill.svg?v=de62af6dc26ee3ac81170b4aa90f88548a0465a7a1f11b92b576ceb2af6116f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
