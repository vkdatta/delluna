export const name="funnel-simple-duotone";
export const id="dl_2ccd14905bcb476bafc9";
export const url=new URL("../icons/funnel-simple-duotone.svg?v=b1a78a69474b2c236c5068942b913c305505611ad9c01a5ac26217ff551b41b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
