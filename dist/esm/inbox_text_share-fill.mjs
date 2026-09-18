export const name="inbox_text_share-fill";
export const id="dl_c3c152e7b776424ab01f";
export const url=new URL("../icons/I/inbox_text_share-fill.svg?v=5554cb0d4d88cf5e11ea669738cac3fbe78217a08bfa99adbb842aad59fde62a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
