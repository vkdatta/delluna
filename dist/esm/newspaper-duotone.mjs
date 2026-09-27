export const name="newspaper-duotone";
export const id="dl_9ab64698680849faa5ca";
export const url=new URL("../icons/newspaper-duotone.svg?v=6f51358718ac63ea41ec11a4a1593afb73c1150e702814615e02aa8a02033882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
