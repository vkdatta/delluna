export const name="lists";
export const id="dl_c7af50bea731da527e0b";
export const url=new URL("../icons/lists.svg?v=7afbcacd8d10e995632c8074fcc867def352726406deb3209af0286707695ed9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
