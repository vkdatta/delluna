export const name="user-round-pen";
export const id="dl_0a06e53d562046e191ec";
export const url=new URL("../icons/user-round-pen.svg?v=2326e98779774808b441f86b002c2f6ec482e34ccb5b02d801211a4a999126fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
