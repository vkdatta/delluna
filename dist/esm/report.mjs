export const name="report";
export const id="dl_93d29b4caf6ce167c265";
export const url=new URL("../icons/report.svg?v=e1fa25c84ccd0331ebe4f8439d6338765afea553e5fb35e87b0c2242de25a195",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
