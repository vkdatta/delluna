export const name="bookmark_bag-fill";
export const id="dl_0c6e2e41212da1d12c98";
export const url=new URL("../icons/bookmark_bag-fill.svg?v=a702f9b5d68acead9a03626e2fe1a215669a2972b20f1bdc7dba88c594b44004",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
