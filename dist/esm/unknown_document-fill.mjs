export const name="unknown_document-fill";
export const id="dl_a8137a5633cfea58d0d6";
export const url=new URL("../icons/unknown_document-fill.svg?v=02a82730212af58c5b96c92b4f7effbf67dfc6fd9f5fa65e55f0b8a5db497cd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
