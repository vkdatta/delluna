export const name="flip_to_back-fill";
export const id="dl_7a5300b67a48ec0233cb";
export const url=new URL("../icons/flip_to_back-fill.svg?v=129d113a924637057af20313f3a16f817707452ebc58f768dc7077d883ae25df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
