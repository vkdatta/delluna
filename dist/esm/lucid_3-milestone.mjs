export const name="lucid_3-milestone";
export const id="dl_dc86ff532e934b62a9b1";
export const url=new URL("../icons/lucid_3-milestone.svg?v=f1854903d7d9d26349881b1c5d44dbe2022b6193823f34e485609834499203d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
