export const name="style-fill";
export const id="dl_08e12728d414fdc0f799";
export const url=new URL("../icons/style-fill.svg?v=13551f5d08e547cf6526820f7fb097754c8dcf283e41fb02269615606d7e56c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
