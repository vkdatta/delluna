export const name="corners-in-light";
export const id="dl_e5987bee0eb14d8eba97";
export const url=new URL("../icons/corners-in-light.svg?v=e894078a484b6e3d09baa7cfd2368f28095fabe87dd469861a654c95410c536c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
