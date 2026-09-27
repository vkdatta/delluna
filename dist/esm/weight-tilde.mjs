export const name="weight-tilde";
export const id="dl_ff2d82a28a904fd6ad01";
export const url=new URL("../icons/weight-tilde.svg?v=edc6fa6bc55c722313a9a186b125bb1e97d050b0636161c2e296569b39efe47c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
