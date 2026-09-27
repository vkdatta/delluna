export const name="replace_image";
export const id="dl_f0fe3c57c56a682723bd";
export const url=new URL("../icons/replace_image.svg?v=715228317ef7e83699fc950f8a084d971d781c22818602512afef2208b1a1eec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
