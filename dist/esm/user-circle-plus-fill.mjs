export const name="user-circle-plus-fill";
export const id="dl_994ea4601aad3fff4f57";
export const url=new URL("../icons/user-circle-plus-fill.svg?v=c3323b66b46d0030a9034cf1ffe407259f895c361f2f06cad2176bdff5a23252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
