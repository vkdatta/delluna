export const name="fish-simple-light";
export const id="dl_13b9a6f4b85044948ca6";
export const url=new URL("../icons/fish-simple-light.svg?v=30f945fffd8d965eaa25b9072073d61540f3d4d10cbc7bb163690175ce047531",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
