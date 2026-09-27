export const name="picture_in_picture_large";
export const id="dl_137de4e04837132e598b";
export const url=new URL("../icons/picture_in_picture_large.svg?v=26749e7fa159d7ef2bbab852b2fe1b33594a4ec3fa17a84d4cc5082a80eeff04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
