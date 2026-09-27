export const name="lucid_3-screen-share";
export const id="dl_7eb9b26f54244416b734";
export const url=new URL("../icons/lucid_3-screen-share.svg?v=285edbe9aa61880109d8a14d1160c11a7d30ffbde979669ffbf6671c7cc371e4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
