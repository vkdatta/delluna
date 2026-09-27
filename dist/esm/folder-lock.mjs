export const name="folder-lock";
export const id="dl_a0067b9de7e14c2e9659";
export const url=new URL("../icons/folder-lock.svg?v=a555dcac664f2cd0c1ec0bacd75dfe3899692ae725a120d1f12a0428191f1c86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
