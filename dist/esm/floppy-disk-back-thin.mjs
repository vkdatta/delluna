export const name="floppy-disk-back-thin";
export const id="dl_c5756a23f8b441fea47c";
export const url=new URL("../icons/floppy-disk-back-thin.svg?v=ec1ecf91460300ba94876ced4217bceeecd72f5058999f130401ba7adaf9fe52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
