export const name="medal-fill";
export const id="dl_80df1827891a49ac9eb5";
export const url=new URL("../icons/medal-fill.svg?v=900201e892756b426fb83b8762a6c8525c893ddb6b2466ab72a266e8efb6d1c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
