export const name="table-of-contents";
export const id="dl_225e0e8df4b74f339430";
export const url=new URL("../icons/table-of-contents.svg?v=755f8db1c7814184e891e3b8834063f6720da8648bf460b8e4982d30e696bce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
