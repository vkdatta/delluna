export const name="gender-female";
export const id="dl_8c833485648f4b69a1b3";
export const url=new URL("../icons/gender-female.svg?v=612b361d0ab032468ecc0e1cf1f9de5fba820dace19e49fa957fad59783da880",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
