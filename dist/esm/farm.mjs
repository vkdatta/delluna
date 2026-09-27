export const name="farm";
export const id="dl_de3abfac2bd84349baca";
export const url=new URL("../icons/farm.svg?v=beb4d37d497667421b02e64d8065ec609bc40929d81be122b1a515e1091d8044",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
