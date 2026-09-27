export const name="bed-light";
export const id="dl_58c0f1306b774c838e8d";
export const url=new URL("../icons/bed-light.svg?v=395231f24f8eff68d978437ebfb81d05fc14e53eb8f20fd114a3bd737bb76b04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
