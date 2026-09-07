export const name="lucid_2-database-x";
export const id="dl_f254f91388fd40718a32";
export const url=new URL("../icons/lucid_2-database-x.svg?v=31ea1d4d7405fb4e316bd904651caeed213b5fba7839aa35f3aa788564a76409",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
