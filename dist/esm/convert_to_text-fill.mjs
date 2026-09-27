export const name="convert_to_text-fill";
export const id="dl_e7671b1d06dbba16c074";
export const url=new URL("../icons/convert_to_text-fill.svg?v=adf833b094802b0b3cc1ecf814db34f07d5d0feaa24168acdb9f6fbb72739792",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
