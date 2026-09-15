export const name="crop_3_2";
export const id="dl_4f756bc440114bfb8040";
export const url=new URL("../icons/C/crop_3_2.svg?v=fc9a88d2b706c4f99ea476d5d377120571c73aedead3b64ea1861bb23406a013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
