export const name="list-magnifying-glass-duotone";
export const id="dl_50e938e866e84ca7b19a";
export const url=new URL("../icons/list-magnifying-glass-duotone.svg?v=35c6ec1ed5a30f5199d4c4add64d4c5016187e595a37de90f1fd134865f109c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
