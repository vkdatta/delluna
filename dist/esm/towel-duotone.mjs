export const name="towel-duotone";
export const id="dl_eaacd00d25a943e081ee";
export const url=new URL("../icons/T/towel-duotone.svg?v=f1931d78e8cf8d6fc30e89533f7665a541c637833fe1471d08a71129303d2040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
