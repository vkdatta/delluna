export const name="shrimp-thin";
export const id="dl_acbaf3fb32ff4a7f888b";
export const url=new URL("../icons/S/shrimp-thin.svg?v=f200a21391659828db11141bdaa3bb21960640218b3c9e07fffce7756c79229b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
