export const name="caret-up-down-thin";
export const id="dl_ad9b635f634841459df4";
export const url=new URL("../icons/caret-up-down-thin.svg?v=2e743dd32a4719c53a270871adb5bf4c19f72d7695b30b44f3d89f9537fb76b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
