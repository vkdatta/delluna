export const name="rubric";
export const id="dl_6f78bd3b88fa484f91f7";
export const url=new URL("../icons/R/rubric.svg?v=4a982a9f4ae86498706e38f7a3009a4ec8b8651c002827e8ec19b12efbb1bd01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
