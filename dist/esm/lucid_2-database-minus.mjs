export const name="lucid_2-database-minus";
export const id="dl_657c167ff9bf44709508";
export const url=new URL("../icons/lucid_2-database-minus.svg?v=d405efd47c4c6903ab683f7c59c17d00370b296a6cdeb42bbbbeed703a3d8935",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
