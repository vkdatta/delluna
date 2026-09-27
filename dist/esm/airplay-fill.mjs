export const name="airplay-fill";
export const id="dl_ca75fd8811cd43cd83fc";
export const url=new URL("../icons/airplay-fill.svg?v=a3be93267e149bb055af168604cff43668b242e4b0004b5b2b0ccc4da2d61c1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
