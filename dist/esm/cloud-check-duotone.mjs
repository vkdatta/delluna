export const name="cloud-check-duotone";
export const id="dl_7a8f9b4204ea4785b30c";
export const url=new URL("../icons/cloud-check-duotone.svg?v=2743c82b34732dbb9066be60c0e8e56c6ed414704469026c9de98217abfbfd35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
