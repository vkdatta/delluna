export const name="underline";
export const id="dl_d990962978f0468aa298";
export const url=new URL("../icons/underline.svg?v=a36e3772408fc15ef23a7567e522c64f30b6ada7deb751f0c44705dc7909e4db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
