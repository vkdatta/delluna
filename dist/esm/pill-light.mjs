export const name="pill-light";
export const id="dl_f0933ad011044e89ad0e";
export const url=new URL("../icons/pill-light.svg?v=6c0b159f1060cbb35d5039e4b824445147e564613cdf21dd3685983846587353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
