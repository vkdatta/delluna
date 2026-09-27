export const name="expand_more";
export const id="dl_9cf7cf04081bc4c2d897";
export const url=new URL("../icons/expand_more.svg?v=4efbb0c4b76688d518c91e680c41b25ae92c6dd952e7ed687287af54af4c1c6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
