export const name="collapse_all-fill";
export const id="dl_a1df742b31334ac38b4e";
export const url=new URL("../icons/C/collapse_all-fill.svg?v=130ee85523dbb387878c316d46f0dfac60a50481e7acbd67f27bceed86cedbe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
