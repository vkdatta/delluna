export const name="west-fill";
export const id="dl_3e05c1a4e0cff83f631b";
export const url=new URL("../icons/west-fill.svg?v=3a04b8d08317c92de089ee9aff44af356ada4d85dd3f9ac632ad8a245fd0f886",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
