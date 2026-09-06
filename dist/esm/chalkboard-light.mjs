export const name="chalkboard-light";
export const id="dl_07e10d6d1cfd4e31a74b";
export const url=new URL("../icons/chalkboard-light.svg?v=2ede3a0f2465d637c7cef58c4a30774d34dc348887825a62610620d31367eb83",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
