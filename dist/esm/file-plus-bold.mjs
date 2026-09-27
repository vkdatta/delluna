export const name="file-plus-bold";
export const id="dl_0923f0f8152f439d8a84";
export const url=new URL("../icons/file-plus-bold.svg?v=07ab88723fc478deed35c07984413ccb4b907999589c119e461c5735ea7182db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
