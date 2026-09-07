export const name="scales-light";
export const id="dl_d986a5b68aa04bdc9dcf";
export const url=new URL("../icons/S/scales-light.svg?v=ef1d2a21d677e1885bf58c2e05d5d60f8523f8533e301d5b8d447750ada2a309",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
