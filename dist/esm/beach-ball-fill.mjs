export const name="beach-ball-fill";
export const id="dl_c35b8dfc1a8f438594e3";
export const url=new URL("../icons/beach-ball-fill.svg?v=e7f8be3c618e84aa790a6c821bf7520fd91ae199d70dfb9976df11e2cd2261bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
