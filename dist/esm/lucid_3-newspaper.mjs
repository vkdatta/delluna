export const name="lucid_3-newspaper";
export const id="dl_515b4f3d4eed4a62b73a";
export const url=new URL("../icons/lucid_3-newspaper.svg?v=aa4cbe15e9dc97477b423781c6ca27da3c283e1d606cf1217fa7f621322daf49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
