export const name="lucid_3-picture-in-picture-2";
export const id="dl_c42f177b32e24ba889c7";
export const url=new URL("../icons/lucid_3-picture-in-picture-2.svg?v=430696d90bfc149c116a9c815e62628abb07780b4db1df617ce827b03f0792ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
