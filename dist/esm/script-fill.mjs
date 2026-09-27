export const name="script-fill";
export const id="dl_e6202b3896e4ec846a49";
export const url=new URL("../icons/script-fill.svg?v=bb0abd07e5062e74f02e42576ead1e97757aff2f744cb67e68f5bcce9472e832",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
