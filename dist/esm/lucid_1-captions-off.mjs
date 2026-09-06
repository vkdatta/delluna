export const name="lucid_1-captions-off";
export const id="dl_6f361b360a2b4a17bc7b";
export const url=new URL("../icons/lucid_1-captions-off.svg?v=a3e3ecda367ce293b89f95537863550a164aa7103c670f977e0c7c252da9563a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
