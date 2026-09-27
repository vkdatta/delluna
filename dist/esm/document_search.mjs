export const name="document_search";
export const id="dl_d89a0e7acedbf4c506db";
export const url=new URL("../icons/document_search.svg?v=74816bc8ec0ed8e08874a090382f0f0abad73ef0e9653888281ca2d08ad0914e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
