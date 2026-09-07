export const name="shopping-bag-open-light";
export const id="dl_4d10582eb9be419fa5fb";
export const url=new URL("../icons/S/shopping-bag-open-light.svg?v=9cee69ee3f2db453abe11b5d353abc63f5c3d1ffd0c7c23de199499dcf5c216b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
