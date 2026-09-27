export const name="tipi-fill";
export const id="dl_dce4f93c346dc6c2d102";
export const url=new URL("../icons/tipi-fill.svg?v=a2b78aef4606df035280608c4f4b304e79ae4c55c4ec8e823d5ab4d16c254778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
