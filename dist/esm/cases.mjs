export const name="cases";
export const id="dl_e773678bac6b4acf139b";
export const url=new URL("../icons/cases.svg?v=ac3d7e295bc5d10236825735f095d5458d1479f316ae861dbaf00853cca67cf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
