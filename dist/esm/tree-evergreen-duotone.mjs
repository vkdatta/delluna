export const name="tree-evergreen-duotone";
export const id="dl_d95894b6dfa30a578c6f";
export const url=new URL("../icons/tree-evergreen-duotone.svg?v=eb425e54f550b59f307b156aaa47b1648db453a5775245ec42bac6a15c2c93c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
