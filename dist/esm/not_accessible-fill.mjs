export const name="not_accessible-fill";
export const id="dl_62a4d959ea08014039e7";
export const url=new URL("../icons/not_accessible-fill.svg?v=be1ee6ef03383830b067080d20355290300a06a8fc8e360ed94d4de8fcebd91b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
