export const name="bookmark_stacks-fill";
export const id="dl_059e7450ba013e9a6cf0";
export const url=new URL("../icons/bookmark_stacks-fill.svg?v=1006a859e8d8625131fffe4c815491f704fb78220c6be8d60dccaf2b4168a461",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
