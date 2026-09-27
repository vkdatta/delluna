export const name="cylinder-bold";
export const id="dl_cba4daf3ed524cad9f5f";
export const url=new URL("../icons/cylinder-bold.svg?v=3f2a32b221976f60338d9d03dd1f461364d52e0078dc921c47185368306c974c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
