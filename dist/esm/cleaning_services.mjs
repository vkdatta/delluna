export const name="cleaning_services";
export const id="dl_065140de9b4e18bf9a0c";
export const url=new URL("../icons/cleaning_services.svg?v=7aa1badedaa6a9f1d71476482ede9415811fbbfb9aaea91fefda89b41dd039f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
