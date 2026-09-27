export const name="number-nine";
export const id="dl_eaa5d179fd2e4c919fb3";
export const url=new URL("../icons/number-nine.svg?v=4e3abdf17cd4b0db3d28a5a7a37a3fe5bdb4939c22db28bca2eeb5fa5c13aabc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
