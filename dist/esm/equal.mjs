export const name="equal";
export const id="dl_d60198f267f19183555d";
export const url=new URL("../icons/equal.svg?v=43630dd4db4aabba562de7f8924d1c8390013fcc691888e316a3538f11267ba5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
