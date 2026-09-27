export const name="table_restaurant";
export const id="dl_c43193343efb743c14ac";
export const url=new URL("../icons/table_restaurant.svg?v=3775b02b9f9ba75e782cdd4c018543a52baa4d7f684d98d30fddc8fc79a52710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
