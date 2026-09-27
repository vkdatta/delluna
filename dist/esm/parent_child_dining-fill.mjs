export const name="parent_child_dining-fill";
export const id="dl_8120dbfa62f1b20abcc4";
export const url=new URL("../icons/parent_child_dining-fill.svg?v=27786c7b4320a59e64d1c65581ebf89b17596ab84bfc5130309fad87aeb70869",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
