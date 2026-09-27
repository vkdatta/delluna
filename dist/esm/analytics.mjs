export const name="analytics";
export const id="dl_5eb4bef05c8107c1d803";
export const url=new URL("../icons/analytics.svg?v=862ea874845bf99eaf7f9c8eb045c3f28503207b2fed0122c46308779996bf45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
