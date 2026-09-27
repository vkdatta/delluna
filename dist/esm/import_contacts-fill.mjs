export const name="import_contacts-fill";
export const id="dl_50226d731f1e852ff9f8";
export const url=new URL("../icons/import_contacts-fill.svg?v=91c7bcb63a4456b6c940caaa47b370de6a87adef233cfad78caac9e2c1e3acde",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
