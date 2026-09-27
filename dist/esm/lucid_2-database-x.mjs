export const name="lucid_2-database-x";
export const id="dl_f254f91388fd40718a32";
export const url=new URL("../icons/lucid_2-database-x.svg?v=8c27a81d2718b9eec7299c56f588ca37fc287ee85768fbc233f5c583c9a8e89b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
