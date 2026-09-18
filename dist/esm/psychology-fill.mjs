export const name="psychology-fill";
export const id="dl_b7f431b187994823a7e0";
export const url=new URL("../icons/psychology-fill.svg?v=39d3aecb0595f7f39844d6a74d76023c4f4f30f26eaea5c30326d259a526ba7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
