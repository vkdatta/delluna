export const name="collapse_right";
export const id="dl_2f2648dd0303472f96db";
export const url=new URL("../icons/all_60_named_svgs/collapse_right.svg?v=e95959c56de8ab68bf7c773171d9c07a9e72d77e1ef21419a7e40128ea884bf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
