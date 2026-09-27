export const name="file-cpp-duotone";
export const id="dl_18dba5e111f547288670";
export const url=new URL("../icons/file-cpp-duotone.svg?v=f9fb374909dce7e6cad81809e47f4674639d468f17f3cd845a9474e7402eb950",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
