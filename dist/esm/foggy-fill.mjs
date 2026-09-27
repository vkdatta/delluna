export const name="foggy-fill";
export const id="dl_3583ed1dba2f0f960141";
export const url=new URL("../icons/foggy-fill.svg?v=ccc2c286619653bb7fdba1d2c7914489d312365d0a5448671961b194382a379d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
