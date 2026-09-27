export const name="nest_eco_leaf";
export const id="dl_fe87d07e0e9ff0286fff";
export const url=new URL("../icons/nest_eco_leaf.svg?v=a36a79fd9903801396f6c88d9c4253f43e362506d364f29c306383a692650fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
