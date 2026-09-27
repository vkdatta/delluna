export const name="filter";
export const id="dl_2f3598228ba981f692e8";
export const url=new URL("../icons/filter.svg?v=e385bdf34e17f1917d71654e2dbc752bd26d0e23e5f09b7aa0bb32037bc97140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
