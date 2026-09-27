export const name="chat_error-fill";
export const id="dl_6a99ca079f14c7b0efc4";
export const url=new URL("../icons/chat_error-fill.svg?v=d443228b2817dd9307d82670e5114e11924374d1fbdb03874f8d90b04d837b32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
