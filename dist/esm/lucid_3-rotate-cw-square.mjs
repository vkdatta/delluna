export const name="lucid_3-rotate-cw-square";
export const id="dl_20595aec348b4b83848f";
export const url=new URL("../icons/lucid_3-rotate-cw-square.svg?v=8b4ff61c67a1d972adc83a16428fdb30491a2c054f3909da3a7e8cf0b3cd6efd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
