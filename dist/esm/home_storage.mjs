export const name="home_storage";
export const id="dl_401694fc5008c5dee59e";
export const url=new URL("../icons/home_storage.svg?v=d01c18eb6ccc1bbe4b383fa66dd4f37c6a3d5a8c1e3133c55ecd351f4dbdba79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
