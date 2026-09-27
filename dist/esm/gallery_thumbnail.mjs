export const name="gallery_thumbnail";
export const id="dl_8f7fa2f306a5fb1c6c1c";
export const url=new URL("../icons/gallery_thumbnail.svg?v=473393526ae1f62fe9d1e51bf3756a962ef0d70b74e16583c3fc1aea76f2a5b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
