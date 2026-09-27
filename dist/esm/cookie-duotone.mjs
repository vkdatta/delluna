export const name="cookie-duotone";
export const id="dl_e32ca7e5958e40858200";
export const url=new URL("../icons/cookie-duotone.svg?v=d8badba622a529b674a48befd8355b6735be545bf97c5d93f88933c55000d6fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
