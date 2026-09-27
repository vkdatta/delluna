export const name="notifications";
export const id="dl_5802b4ac58f8b3522e54";
export const url=new URL("../icons/notifications.svg?v=4833f71c5783931e0428d5fd57307c506e8b1a5b109b34538299465467619828",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
