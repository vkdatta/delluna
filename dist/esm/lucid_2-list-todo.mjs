export const name="lucid_2-list-todo";
export const id="dl_f4a7b1b7c3a34c0ea652";
export const url=new URL("../icons/lucid_2-list-todo.svg?v=0a9064705c27d03dfdbbe16cb92870536fca1eb29584ed49a36bf944befc7338",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
