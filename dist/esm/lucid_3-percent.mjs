export const name="lucid_3-percent";
export const id="dl_4904ed2b7ee04480851e";
export const url=new URL("../icons/lucid_3-percent.svg?v=3cb36606e6fb4c2a3b8b4ab38d21f9088d6848771611ed71a2d387e01c3b93ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
