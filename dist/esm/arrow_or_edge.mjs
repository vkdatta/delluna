export const name="arrow_or_edge";
export const id="dl_5a80f50ad435b089ce5d";
export const url=new URL("../icons/arrow_or_edge.svg?v=159c8363848cf6459f1eeee86dd7fdd8fb37fc60add6f174fb8484d26a716ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
