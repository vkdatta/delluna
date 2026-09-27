export const name="folder-simple-star-duotone";
export const id="dl_04ef5e991e144a998659";
export const url=new URL("../icons/folder-simple-star-duotone.svg?v=7db10c4a0aa6f081c319348dbb11e1dd66de58233c62a5e9fe86a6969939504b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
