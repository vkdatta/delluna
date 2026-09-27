export const name="bookmarks-bold";
export const id="dl_1c2ae6136d7f4e6da953";
export const url=new URL("../icons/bookmarks-bold.svg?v=f977ee11c6d4c0817022ed4dcfec3a1c64a0593d6d3ed513e7731102ed188c67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
