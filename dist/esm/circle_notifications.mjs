export const name="circle_notifications";
export const id="dl_a5b4c8c402d963024e05";
export const url=new URL("../icons/circle_notifications.svg?v=66ffa83709f70b2d2e32b7e1a6e83750bba34a707a517e53832d9f4c05c4c023",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
