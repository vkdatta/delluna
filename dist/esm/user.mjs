export const name="user";
export const id="dl_fef56440c19028876b9b";
export const url=new URL("../icons/user.svg?v=4e942e1a80914f0025cffa3deb8c9f01a2918a2b0f0b37940a2158af4d54b29f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
