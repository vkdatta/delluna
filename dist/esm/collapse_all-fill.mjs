export const name="collapse_all-fill";
export const id="dl_546c087be650c6fbb77d";
export const url=new URL("../icons/collapse_all-fill.svg?v=130ee85523dbb387878c316d46f0dfac60a50481e7acbd67f27bceed86cedbe4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
