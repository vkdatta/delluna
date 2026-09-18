export const name="preliminary";
export const id="dl_cb4917f8bb214bb0a59c";
export const url=new URL("../icons/preliminary.svg?v=edddc028d0ccb2cddf6969dd9bece906d4c3471b7ba44686eae58cb9c3a4ad55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
