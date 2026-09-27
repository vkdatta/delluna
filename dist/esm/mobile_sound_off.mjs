export const name="mobile_sound_off";
export const id="dl_47ad17ebd80abfaead23";
export const url=new URL("../icons/mobile_sound_off.svg?v=43df3f7c51a00934b1d5ad73f4795e70b363d7bfd3380f6ab2131839cc358d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
