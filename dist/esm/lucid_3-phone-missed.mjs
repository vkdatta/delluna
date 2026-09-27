export const name="lucid_3-phone-missed";
export const id="dl_371cff3fb83642a786f0";
export const url=new URL("../icons/lucid_3-phone-missed.svg?v=87de3748fdf74b603d54e82ab1a6be91bc23aa9ff2d748604c292012c85dce3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
