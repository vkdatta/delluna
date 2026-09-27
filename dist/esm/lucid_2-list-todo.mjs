export const name="lucid_2-list-todo";
export const id="dl_f4a7b1b7c3a34c0ea652";
export const url=new URL("../icons/lucid_2-list-todo.svg?v=1a3a4a63aa22d62674b5d765680b4b354f77243034b31fa0d9b147e887563fa4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
