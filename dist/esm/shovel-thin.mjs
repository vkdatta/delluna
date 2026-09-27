export const name="shovel-thin";
export const id="dl_bd050509788ceaabd930";
export const url=new URL("../icons/shovel-thin.svg?v=c4952eefb9832f49c3dfd238d97f140995bd5a3724ad61f2c161250daf2e0f54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
