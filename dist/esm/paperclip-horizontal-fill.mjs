export const name="paperclip-horizontal-fill";
export const id="dl_6490065ec1314170809f";
export const url=new URL("../icons/paperclip-horizontal-fill.svg?v=ad229cb4d30130deeee349d7370da5c65deb4e460103f6c5c8b9ddf728dd1bd2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
