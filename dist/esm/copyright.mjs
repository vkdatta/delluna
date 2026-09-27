export const name="copyright";
export const id="dl_3a30c743c1a84939819b";
export const url=new URL("../icons/copyright.svg?v=747096ac7357f0c1ef61b96fb98ff0f6ce0924c41317237ce98867eeb0184e5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
