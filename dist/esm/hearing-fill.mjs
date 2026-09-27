export const name="hearing-fill";
export const id="dl_2b4a9897977a3696d979";
export const url=new URL("../icons/hearing-fill.svg?v=abc05cfa77ea037a03b2c0edd1ee3bff8c1436b09ad047434abf7f009a1b49ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
