export const name="bookmark_stacks-fill";
export const id="dl_ae88d52029ff741c3535";
export const url=new URL("../icons/bookmark_stacks-fill.svg?v=0b37653b6718679f34d583f204bd4e5f51d58fa3b61abfa46c629ea41b815cb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
