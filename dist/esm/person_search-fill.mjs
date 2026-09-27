export const name="person_search-fill";
export const id="dl_c267a5098f5ad645326f";
export const url=new URL("../icons/person_search-fill.svg?v=74d0dd173139ff444ee4acf295b1347df442a62b4b8d160ac016390c125d20c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
