export const name="sign_language_off-fill";
export const id="dl_f8a6c7c3bb6d2a695ef6";
export const url=new URL("../icons/sign_language_off-fill.svg?v=5e75cd24e6a32214d1df08896d4f97cb779f8c11bbe087b6d8b1093834a867f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
