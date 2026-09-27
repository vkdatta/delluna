export const name="building-light";
export const id="dl_9c39eee6391e42a0a579";
export const url=new URL("../icons/building-light.svg?v=f59d2ba5a9202cf5816b108d493c22e92ac4e6c338a8af09f8c90f3f16e5eb3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
