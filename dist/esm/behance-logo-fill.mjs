export const name="behance-logo-fill";
export const id="dl_f844fed30b2b44dba575";
export const url=new URL("../icons/behance-logo-fill.svg?v=f268ccf2fd9fad8b58f5959b8d4d487d4d0096fc18206162eed7db820912b9b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
