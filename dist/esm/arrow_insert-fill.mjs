export const name="arrow_insert-fill";
export const id="dl_1196bd9e8aabdc6c06dc";
export const url=new URL("../icons/arrow_insert-fill.svg?v=e88bf382e92204a3a44515990cde2662139da61659eedfdf9f0e1f59a8327163",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
