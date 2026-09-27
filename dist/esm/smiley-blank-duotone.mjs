export const name="smiley-blank-duotone";
export const id="dl_bd94386438fd4450c80d";
export const url=new URL("../icons/smiley-blank-duotone.svg?v=a781d69353004681b17ce7d927a437ae40f9177a1870b110bac73633fc7b27a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
