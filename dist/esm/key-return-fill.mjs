export const name="key-return-fill";
export const id="dl_cd9cae39506b42b782e1";
export const url=new URL("../icons/key-return-fill.svg?v=7c8c149fe063485eb393322782116b65b4248eb9b372623e69186a17414cebff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
