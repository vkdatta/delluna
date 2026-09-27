export const name="bookmark_stacks";
export const id="dl_9796d36ec8e6f938cd51";
export const url=new URL("../icons/bookmark_stacks.svg?v=f41390810c9e2deb6e9b18b3a95379d7832a2d7d5598fc904bae4eb9893d4da5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
