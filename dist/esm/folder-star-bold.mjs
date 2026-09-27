export const name="folder-star-bold";
export const id="dl_0c52d5fde5674d7a9a0e";
export const url=new URL("../icons/folder-star-bold.svg?v=d315dcafba284c14b2375a594fc56af54cafa1e34a5b15c8c3cfcd08bd5e23b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
