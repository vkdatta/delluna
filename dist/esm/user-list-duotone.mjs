export const name="user-list-duotone";
export const id="dl_a602e8b2bb991061af64";
export const url=new URL("../icons/user-list-duotone.svg?v=060d84b1bc4987bcecf31505ddd0e896e9c0b478c83568fe36a600c4e6fbbd60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
