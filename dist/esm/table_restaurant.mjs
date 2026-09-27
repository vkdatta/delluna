export const name="table_restaurant";
export const id="dl_1d04baf7ef70044c30f8";
export const url=new URL("../icons/table_restaurant.svg?v=d88b73ce0104f895d3e492295c17a3b077bddebdcf52a46195c578ddade18680",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
