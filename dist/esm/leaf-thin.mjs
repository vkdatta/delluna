export const name="leaf-thin";
export const id="dl_c47abca6229b485f8f0f";
export const url=new URL("../icons/leaf-thin.svg?v=224d9c4ef24c8869426ed01527d8914e8734fbe27ac70b84e07db29cc979f8f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
