export const name="lucid_2-list-todo";
export const id="dl_f4a7b1b7c3a34c0ea652";
export const url=new URL("../icons/lucid_2-list-todo.svg?v=14ce396c53635373b90a6bf885dd2a4db7f6ab68d98d5556139254a82d49206d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
