export const name="groups_2-fill";
export const id="dl_98fb0059bc82cdc7e847";
export const url=new URL("../icons/groups_2-fill.svg?v=387b0b5d95470350fa6a729cde66e22f122011c420734f2ce45565e3ee8c85c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
