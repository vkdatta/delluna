export const name="lucid_3-pc-case";
export const id="dl_02205d379228480881d1";
export const url=new URL("../icons/lucid_3-pc-case.svg?v=9a33e401fc98b7b5ae1736e6201c5d49c60751eb92c0c81b35b2e3451c42e3dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
