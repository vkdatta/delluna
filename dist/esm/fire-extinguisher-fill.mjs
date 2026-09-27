export const name="fire-extinguisher-fill";
export const id="dl_4515b7b2bfcb40a3adce";
export const url=new URL("../icons/fire-extinguisher-fill.svg?v=8cada19cf5dbe21d1e506ea86e8d1757ce22e62bafc3a7a0fb8d872186ed9f62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
