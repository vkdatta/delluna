export const name="hdr_weak-fill";
export const id="dl_9960494d5b78ba9ff08f";
export const url=new URL("../icons/hdr_weak-fill.svg?v=1c2e25a3ed7794a0b889d8475463a88a32a303de6dedbdbc36df9f5d847cd60b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
