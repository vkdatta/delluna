export const name="gender-transgender-bold";
export const id="dl_2a8f0533c4be4620b6b2";
export const url=new URL("../icons/gender-transgender-bold.svg?v=1722179a245c4a5b7b49d0606b58fb156dae8d64fec3f5476a3ec64f2f2ef35a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
