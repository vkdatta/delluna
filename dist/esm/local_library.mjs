export const name="local_library";
export const id="dl_06c966729c5929370b41";
export const url=new URL("../icons/local_library.svg?v=965e507dc66bacc2ed4ad8b88a3c76064feb6b7c7a98faca64421b11596f61e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
