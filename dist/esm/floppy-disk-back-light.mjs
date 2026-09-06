export const name="floppy-disk-back-light";
export const id="dl_1aa96140997c461aa3fa";
export const url=new URL("../icons/floppy-disk-back-light.svg?v=f197393044d8ca6eb9306fcc3552db57a49bdd2adc443c4fac867ddfa0c2cf26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
