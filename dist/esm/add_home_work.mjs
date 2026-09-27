export const name="add_home_work";
export const id="dl_8c148251e498ab989268";
export const url=new URL("../icons/add_home_work.svg?v=879a18dca2e2b914cb654925d9e53397a0ee1bdd7fc2f21a003d003717a83e64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
