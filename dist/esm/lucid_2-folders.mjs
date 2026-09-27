export const name="lucid_2-folders";
export const id="dl_0dfe9fac3c3f42218007";
export const url=new URL("../icons/lucid_2-folders.svg?v=e3b4aaecd5560ea9767a425d090e2616455ba9ca0476bde44728693e757e4422",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
