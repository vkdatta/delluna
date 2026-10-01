export const name="users-three-fill";
export const id="dl_da8b7139033f983d4b81";
export const url=new URL("../icons/users-three-fill.svg?v=aca109558096eca83a60ded74a65b5ab9d341857f0c76f7b89bf93e3bd6df971",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
