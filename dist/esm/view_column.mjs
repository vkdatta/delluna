export const name="view_column";
export const id="dl_f4bb1ce3e8a8430692cf";
export const url=new URL("../icons/view_column.svg?v=2e0f59e6c054ac18398c4103104033920af1cfcf477c3a3529d5449e8e484d37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
