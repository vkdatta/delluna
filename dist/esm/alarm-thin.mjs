export const name="alarm-thin";
export const id="dl_981b92b68ca044b09534";
export const url=new URL("../icons/alarm-thin.svg?v=8027d0b01db56c12917693f2faf5cf5e132fbaf2895b68a33466909b63ab412d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
