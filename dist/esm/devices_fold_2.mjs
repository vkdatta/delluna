export const name="devices_fold_2";
export const id="dl_05e4e684b64240759ec7";
export const url=new URL("../icons/devices_fold_2.svg?v=e1326408c81c0a17e865ac3813a0c71384d5e9197968f52df383b249b2a4762d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
