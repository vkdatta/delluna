export const name="quotes-duotone";
export const id="dl_4cc977fa712f42508a2a";
export const url=new URL("../icons/quotes-duotone.svg?v=b018f143022176abdea6191160f416a8346a388b7f6eaa325ed704e681d84098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
