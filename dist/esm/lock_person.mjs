export const name="lock_person";
export const id="dl_41d21ff723bffafc78ab";
export const url=new URL("../icons/lock_person.svg?v=e8f1e955d46ecaa1da9ee9c9629a5537b1475bf13c4828ecfeaa40277296a189",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
