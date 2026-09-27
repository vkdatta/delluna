export const name="selection-inverse-light";
export const id="dl_6b9834201181c71afdb0";
export const url=new URL("../icons/selection-inverse-light.svg?v=3c115da3057517e9ee6fc5ae77700dfd82682501aace2173790cf9a2ef56ada1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
