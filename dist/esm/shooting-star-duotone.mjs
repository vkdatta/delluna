export const name="shooting-star-duotone";
export const id="dl_8e11700344a143764022";
export const url=new URL("../icons/shooting-star-duotone.svg?v=169adfbcfcd6b8d76466af025723d4b444d89acc8cac7db5ec9ea6386b9979d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
