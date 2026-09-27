export const name="parent_child_dining";
export const id="dl_d896e205142c14709d98";
export const url=new URL("../icons/parent_child_dining.svg?v=d817ecac0cd51a36b36dcdf3b11c889eb38c711c92ef97f7921cb47380d0b812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
