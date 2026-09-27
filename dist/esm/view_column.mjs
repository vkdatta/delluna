export const name="view_column";
export const id="dl_95185c3174c53ee3a967";
export const url=new URL("../icons/view_column.svg?v=2e0f59e6c054ac18398c4103104033920af1cfcf477c3a3529d5449e8e484d37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
