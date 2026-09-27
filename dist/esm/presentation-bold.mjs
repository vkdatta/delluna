export const name="presentation-bold";
export const id="dl_fdd08654aff24a2292a4";
export const url=new URL("../icons/presentation-bold.svg?v=e12654e69512ac072feccc975866959fdde71b49b230668f330ea58de2ce7a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
