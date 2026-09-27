export const name="smiley-sticker";
export const id="dl_27dfc66a460030895839";
export const url=new URL("../icons/smiley-sticker.svg?v=940a3e9d38f78cbc7437e6d0cd0c82dcbc94924e75fd9a227ea2479e53202123",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
