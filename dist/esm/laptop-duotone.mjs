export const name="laptop-duotone";
export const id="dl_5fea16139b95480bafad";
export const url=new URL("../icons/laptop-duotone.svg?v=ef5c0afebc2e0144f924c81f46529c02aae00095af2bc358ff48d6c81072ed41",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
