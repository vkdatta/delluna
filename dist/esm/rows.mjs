export const name="rows";
export const id="dl_7abaad558ca64f9aace5";
export const url=new URL("../icons/rows.svg?v=746ea88f9c58e378af7d4ce442d7e79f2d994e26aa72889d6d2d81c08c8edecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
