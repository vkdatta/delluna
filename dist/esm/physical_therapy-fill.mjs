export const name="physical_therapy-fill";
export const id="dl_94802cbbfd50d8f7fd0a";
export const url=new URL("../icons/physical_therapy-fill.svg?v=1b135335fb7689d963ceb9848c2c552c824ec3460f56e1b7304061daf89ccded",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
