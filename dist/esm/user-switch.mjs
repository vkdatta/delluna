export const name="user-switch";
export const id="dl_3511100723794bb9a2bf";
export const url=new URL("../icons/U/user-switch.svg?v=a2585ce876263b2c3a106ff22341c37b90cd1a13b5bc0b8762c5eadc8998ffe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
