export const name="shield-check";
export const id="dl_236d3b07f2237ce932b4";
export const url=new URL("../icons/shield-check.svg?v=4f38baa35f9e1e6cff04a682c196ec24d55633ed61216fca650432a6c57edc8a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
