export const name="columns-thin";
export const id="dl_d4d44401ff214b5eaf37";
export const url=new URL("../icons/columns-thin.svg?v=af06df90859df215af5156114379593b68ded27a88df17bd8cdf36e708233fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
