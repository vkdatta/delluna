export const name="funnel-simple-duotone";
export const id="dl_2ccd14905bcb476bafc9";
export const url=new URL("../icons/funnel-simple-duotone.svg?v=d62ee3ac1ac7848145167374ccd61b4bf2c4cc6936a539db5854486f359d5225",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
