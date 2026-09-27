export const name="telescope";
export const id="dl_79a217c815df40569378";
export const url=new URL("../icons/telescope.svg?v=80475b834eac8c8d890f3979ca71c46cd259b9fb7a59d54f36253b3fd93c6a20",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
