export const name="article-medium-light";
export const id="dl_92bdd0efb9eb40ccb764";
export const url=new URL("../icons/article-medium-light.svg?v=b9b4ec9af0655ea0fe8431e9927300a0b56f4893d59cc763f6689e9fcc594557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
