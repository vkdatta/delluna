export const name="share-fat-bold";
export const id="dl_26d74c97592b8678485e";
export const url=new URL("../icons/share-fat-bold.svg?v=08c4f6922a9d656b136e1d0cc26bcf7b246862238a6ad3064bd4ceb1a5338389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
