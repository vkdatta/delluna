export const name="boot-light";
export const id="dl_f06a486e4e604d8ab73f";
export const url=new URL("../icons/boot-light.svg?v=9e879f20346ad9e58aa26a0857046ae7a3c0985f06fe2a4207176e7a0535a6dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
