export const name="output-fill";
export const id="dl_137c8126602ab783cc9e";
export const url=new URL("../icons/output-fill.svg?v=08e6c31bcbc8cf3ef2fd55fe67c59dcb4744894cc6c0753437c2b92c3b3bf3fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
