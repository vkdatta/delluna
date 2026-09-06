export const name="currency-kzt-light";
export const id="dl_22663aa979a74a1281f4";
export const url=new URL("../icons/currency-kzt-light.svg?v=dae27dcabd64918319e35167c7f89be71d70e9ebb2890baa25b77528d49a2a02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
