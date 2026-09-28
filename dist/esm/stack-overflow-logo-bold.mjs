export const name="stack-overflow-logo-bold";
export const id="dl_d953c7a76b1263bc9460";
export const url=new URL("../icons/stack-overflow-logo-bold.svg?v=4482c00fb2da8f5f4d2d9f83fd1a742e7d78a64c7205c479c390601593906d58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
