export const name="lucid_2-git-branch";
export const id="dl_1305e4ae88e540ba887b";
export const url=new URL("../icons/lucid_2-git-branch.svg?v=1e1214b3b66f9b93741036917fef29c61c3dea85fd14ebb47323e1ca78b4b6fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
