export const name="landscape";
export const id="dl_8ec06e612d6495531160";
export const url=new URL("../icons/landscape.svg?v=21409cb451cb76f9d2efe8701532f9b23be41c8394e895c79401c3a112f920b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
