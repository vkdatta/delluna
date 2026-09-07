export const name="tree-evergreen-duotone";
export const id="dl_1e31f4f3a5cf4c6abd08";
export const url=new URL("../icons/T/tree-evergreen-duotone.svg?v=eb425e54f550b59f307b156aaa47b1648db453a5775245ec42bac6a15c2c93c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
