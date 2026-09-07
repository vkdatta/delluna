export const name="shrimp-duotone";
export const id="dl_aed18e8b99eb43018384";
export const url=new URL("../icons/S/shrimp-duotone.svg?v=5a2571a461b499fea15bc68cf00bca8c9c5dc915c0b0cf9327628fab0363509a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
