export const name="chair_fireplace";
export const id="dl_4b62e1419db507294833";
export const url=new URL("../icons/chair_fireplace.svg?v=5d2c79612b8a3fee70eadb2b0cac06795deee83d4cc938d47d6fb10118959bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
