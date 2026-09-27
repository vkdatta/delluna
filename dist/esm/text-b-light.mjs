export const name="text-b-light";
export const id="dl_f3ae73c181ca65c1a1f5";
export const url=new URL("../icons/text-b-light.svg?v=899fe45e52928429c98a092eee46c774b9d6490922f07fbdd045914f77cc52fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
