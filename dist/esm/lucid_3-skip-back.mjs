export const name="lucid_3-skip-back";
export const id="dl_225d363e782945239698";
export const url=new URL("../icons/lucid_3-skip-back.svg?v=e70435d23f0c05dbdaf76120d8fac7c44c77877df0b6ae59711f4dde69638d9c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
