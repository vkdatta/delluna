export const name="move_group-fill";
export const id="dl_1f91dc690fd130f491f5";
export const url=new URL("../icons/move_group-fill.svg?v=3e2c5696d8c709e541e2f28765088c778e7c16372500a57e59a47137836ef6ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
