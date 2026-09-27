export const name="9k_plus-fill";
export const id="dl_96d82258afe177e451f0";
export const url=new URL("../icons/9k_plus-fill.svg?v=9d58327b39d859b90ffedecb42ecf8c43f35a661c0c089fd193a01a3803a2d2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
