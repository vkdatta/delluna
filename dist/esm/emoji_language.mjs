export const name="emoji_language";
export const id="dl_f8c3932eb4cd41c9b5d5";
export const url=new URL("../icons/E/emoji_language.svg?v=5d92596e16b5ad34b145e65020d89dbf2b2a6c6b466cb33e25db6e6e0f89f759",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
