export const name="lucid_2-mail-check";
export const id="dl_038743ab46e84dcdae38";
export const url=new URL("../icons/lucid_2-mail-check.svg?v=91a2a291dfdc96e06cf7e38459106558c3140ac6b2488ee43b2374bdc343550e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
