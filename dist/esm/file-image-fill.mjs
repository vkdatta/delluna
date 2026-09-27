export const name="file-image-fill";
export const id="dl_a5f517dad7a649f0ba3c";
export const url=new URL("../icons/file-image-fill.svg?v=64d1998f610d4c9b494f258820ff1d1d7edc256fa4426689a4cae97a10e51896",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
