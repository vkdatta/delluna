export const name="coins";
export const id="dl_d048e7b93bb347ed98eb";
export const url=new URL("../icons/coins.svg?v=c4547a28dc1727218e8fd7a8e2675dccb2be8df2e4e344834a299c1eda7b5cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
