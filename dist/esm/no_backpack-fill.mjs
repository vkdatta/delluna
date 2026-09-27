export const name="no_backpack-fill";
export const id="dl_9487932e43498c95a5a8";
export const url=new URL("../icons/no_backpack-fill.svg?v=7f84ce661fe747b7cbb31dfa8f471567fd2e8570abdbf777495f4a367dbf30c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
