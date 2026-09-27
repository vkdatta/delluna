export const name="vrpano-fill";
export const id="dl_aca11ddd1843dd7673f9";
export const url=new URL("../icons/vrpano-fill.svg?v=b3f5d156755cb59ad299c67b40bf27645bb34fc90a5095505eb0a1f816750d6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
