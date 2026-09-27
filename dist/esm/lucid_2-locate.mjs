export const name="lucid_2-locate";
export const id="dl_2217e06c1c104f7fba55";
export const url=new URL("../icons/lucid_2-locate.svg?v=6d9058f0201022119a4a94b3b19cdc79a96414bdcdf9165f4d83c685060b512b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
