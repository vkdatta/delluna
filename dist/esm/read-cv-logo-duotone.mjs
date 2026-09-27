export const name="read-cv-logo-duotone";
export const id="dl_edf6c0b351f54fc6b6c9";
export const url=new URL("../icons/read-cv-logo-duotone.svg?v=f00903e251413587dca986866228b2c147bdf57d1ce1167c820dca2c834ed7f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
