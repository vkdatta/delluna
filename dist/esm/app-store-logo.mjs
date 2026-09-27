export const name="app-store-logo";
export const id="dl_da69ddcbd866491ea62a";
export const url=new URL("../icons/app-store-logo.svg?v=88e98ac63554191b0fb99f688a6ecbf5b72a944177062f99ee55ee2540468bdf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
