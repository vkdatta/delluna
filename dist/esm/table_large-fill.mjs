export const name="table_large-fill";
export const id="dl_24cbb3a0787346cfa32d";
export const url=new URL("../icons/T/table_large-fill.svg?v=76f7a98530638f97c34708b5e080005899f0960942005363517d480a847d92ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
