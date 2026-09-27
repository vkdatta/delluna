export const name="type";
export const id="dl_11ea2afa1c054dd7a986";
export const url=new URL("../icons/type.svg?v=2cff4bc6bcdb53723ceffc66d9fcf277eb81a228d4203a214fed283002e3c4bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
