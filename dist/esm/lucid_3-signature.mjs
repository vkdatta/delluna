export const name="lucid_3-signature";
export const id="dl_81def02cd36246e38acc";
export const url=new URL("../icons/lucid_3-signature.svg?v=65d1cab8e13669e540f6e4b04f2d1d9fd361b62bccb0dc5630ebbd4e613a1dc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
