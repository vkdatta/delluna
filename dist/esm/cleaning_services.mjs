export const name="cleaning_services";
export const id="dl_b958ad7cb0edc603a99c";
export const url=new URL("../icons/cleaning_services.svg?v=3406056d2622f774c8ca456537773c7444861f52faaf2a0ee206a6a1f35d0b36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
