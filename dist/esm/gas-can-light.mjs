export const name="gas-can-light";
export const id="dl_dd2b5733734d4e16a3bb";
export const url=new URL("../icons/gas-can-light.svg?v=6a81b8cd7936ae550056d96acb21988af721928f2069c8124fc4759075604c33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
