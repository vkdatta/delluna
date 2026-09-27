export const name="phone_missed";
export const id="dl_af8ac0e59bdf5160d540";
export const url=new URL("../icons/phone_missed.svg?v=daa0e761e9e770c48cefba4b82db63e63a8604524bced26fd30c5e4b32665529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
