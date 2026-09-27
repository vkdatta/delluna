export const name="kebab_dining";
export const id="dl_62f18d041527ae76dce0";
export const url=new URL("../icons/kebab_dining.svg?v=c412a46d451195e3650d8f741b4617b8e9174f946130669decb3bc8d36a0e647",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
