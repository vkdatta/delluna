export const name="lucid_1-box";
export const id="dl_708f51ff24dd44d1918d";
export const url=new URL("../icons/lucid_1-box.svg?v=444f6f33da31e0d511f251e4c2498eee801a488b2226a7ad64d0be4baef22b93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
