export const name="lucid_3-pc-case";
export const id="dl_02205d379228480881d1";
export const url=new URL("../icons/lucid_3-pc-case.svg?v=671f349e74bbe5982a1e24fb755070901140e732a899d38f98b5aea0c223a7cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
