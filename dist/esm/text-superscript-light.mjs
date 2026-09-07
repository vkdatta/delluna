export const name="text-superscript-light";
export const id="dl_c32312f2d188410392d6";
export const url=new URL("../icons/T/text-superscript-light.svg?v=0b75b327fd030b2189ca205ba96c715be2cd88973e20afc6d900f11da76c1697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
