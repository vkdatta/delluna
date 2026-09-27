export const name="selection-foreground-duotone";
export const id="dl_eb45542c8fa15fc95796";
export const url=new URL("../icons/selection-foreground-duotone.svg?v=93ecedab41d017314b6599091931caff063b65a5d1fb9c6190b1aeb95e31afcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
