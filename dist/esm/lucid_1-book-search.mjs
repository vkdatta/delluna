export const name="lucid_1-book-search";
export const id="dl_861636defcf9401e81c5";
export const url=new URL("../icons/lucid_1-book-search.svg?v=1eddb17f3f7480a707b996e4db06f3cf445cf2a75c02f31ca389da373aeaa859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
