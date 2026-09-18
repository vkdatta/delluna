export const name="stylus_pen-fill";
export const id="dl_9e42161d5a054f9aaa73";
export const url=new URL("../icons/stylus_pen-fill.svg?v=b4923d29dd77e773032d095df9d4555b3a3628f2c15e1f2c8b8d16b73bf8b56c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
