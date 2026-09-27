export const name="list-plus-fill";
export const id="dl_83e0936255694ab9b1bd";
export const url=new URL("../icons/list-plus-fill.svg?v=f8e04b0d0beba6a91ce564e2150e0d4ee73153c89cda573010c2e609e90dc71a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
