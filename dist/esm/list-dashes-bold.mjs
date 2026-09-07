export const name="list-dashes-bold";
export const id="dl_cfa70d3575f349fd80e2";
export const url=new URL("../icons/list-dashes-bold.svg?v=2314e42ae1481ac47b73831ef70cd3393b589e7a93dbd33509ae0d0d551a30f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
