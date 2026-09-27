export const name="perm_media";
export const id="dl_73dd12ba27507e616aad";
export const url=new URL("../icons/perm_media.svg?v=231555de41ee94fb3e1d4c9f85ece323be418c1c051218f91229b5e3789b8295",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
