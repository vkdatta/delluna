export const name="format_text_clip";
export const id="dl_a0d6332bf7b647352497";
export const url=new URL("../icons/format_text_clip.svg?v=95f2c1d6db8f4e56270bdeacde1445fb37341fde3ab2d11a30a308de445c1677",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
