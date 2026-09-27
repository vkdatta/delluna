export const name="drop-slash-light";
export const id="dl_34bc0f7f2d8f44558cba";
export const url=new URL("../icons/drop-slash-light.svg?v=daf69636c62b059006569d9c5638fa027f20e81af63b144d0e417c114d2ba306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
