export const name="combine_columns";
export const id="dl_aa816dbb75f54a19ad7b";
export const url=new URL("../icons/combine_columns.svg?v=19cacf408afde200672b6c33e19b287164a03deed505a40bf34fb81da1e19bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
