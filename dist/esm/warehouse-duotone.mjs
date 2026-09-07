export const name="warehouse-duotone";
export const id="dl_df42c7260ae6409db2e5";
export const url=new URL("../icons/W/warehouse-duotone.svg?v=bce1c2ee8b4a5f7d7650830d02c40caaa038e6f5d38ae8d5731ecbf5067fedae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
