export const name="shield_moon-fill";
export const id="dl_4bb9bbf436dee297ab7a";
export const url=new URL("../icons/shield_moon-fill.svg?v=5a41764b19b73e3a606d04434185a31dc8f7addb7e6fa6fa69932d4ca7334f1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
