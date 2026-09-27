export const name="lock_open-fill";
export const id="dl_dd5f49790c255e549d9e";
export const url=new URL("../icons/lock_open-fill.svg?v=b79ee9f2f09ce25388cb44c3322019bb9809e98059d6770ee1e5fd613fb93311",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
