export const name="lucid_1-clover";
export const id="dl_50db1593ceb44fcbac69";
export const url=new URL("../icons/lucid_1-clover.svg?v=d2bc78e3d30ba6ef93da0af3738b1cda2e47960da80799a0f2382de6af0dd3e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
