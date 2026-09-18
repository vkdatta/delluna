export const name="home_work";
export const id="dl_93a56d7636454b1fb696";
export const url=new URL("../icons/H/home_work.svg?v=d6cbac5781a3fa496ef4c4f7aa5e32a109f26f35569c43d4d10921df9596ee61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
