export const name="keyboard_external_input";
export const id="dl_c7929b909f3a50744bad";
export const url=new URL("../icons/keyboard_external_input.svg?v=139f30d502003b0a4101e7d91696687983129b0fa022cca29a00f86ad3c716eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
