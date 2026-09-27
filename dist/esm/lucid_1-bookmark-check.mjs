export const name="lucid_1-bookmark-check";
export const id="dl_8db5a11b4db4403483f2";
export const url=new URL("../icons/lucid_1-bookmark-check.svg?v=f19ad1534bf3248c9e0af75eb89f421e0fc40917a5963c170a83bf6663f5aefc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
