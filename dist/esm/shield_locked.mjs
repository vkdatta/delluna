export const name="shield_locked";
export const id="dl_dfa9e812da4c445b8970";
export const url=new URL("../icons/shield_locked.svg?v=b25d74b9aa21e8e0a33884dd989aaef8cac7915fc863a76918be2f05b334eb95",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
