export const name="image_aspect_ratio";
export const id="dl_07be27f9d37a4256b301";
export const url=new URL("../icons/I/image_aspect_ratio.svg?v=0e741c01503604dd01e7bc690365bc9a44e8291ebf78dafc6901762adf452d04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
