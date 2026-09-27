export const name="villa";
export const id="dl_eb4c64e8c1ef66028dd8";
export const url=new URL("../icons/villa.svg?v=ab4ab1a14325a1843d5530def9866687e71077ad70102241a2c99c2c38d67772",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
