export const name="wysiwyg";
export const id="dl_c05939299970d76a7a89";
export const url=new URL("../icons/wysiwyg.svg?v=66d8224ab7f228b8806a5e9fc49ab6ddf418e9bc579bc4643b3cdb090aa0746d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
