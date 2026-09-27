export const name="rows-plus-top-light";
export const id="dl_82beebb9f66342eda433";
export const url=new URL("../icons/rows-plus-top-light.svg?v=676345a25b94e50233d08e8b6b6fdf9751215a92a32158c108a2af7ab5f80e3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
