export const name="album";
export const id="dl_bfc7cd62e42753a42f7b";
export const url=new URL("../icons/album.svg?v=aa915b2be9408c03f6f7ca243c0d232d71b38a503a9f930fe9fbd9fcda56c13d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
