export const name="file-c-sharp";
export const id="dl_7b233248abcc4098909f";
export const url=new URL("../icons/file-c-sharp.svg?v=f201ad97d72709e9ad2b825c02ff687ebd590d82a76073fe014b707599232213",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
