export const name="monitor-thin";
export const id="dl_e20c6db2884f45fcaaf2";
export const url=new URL("../icons/monitor-thin.svg?v=b190e84915ff8597fae1869e3dc225e61fcff303095ab2e8d1790e729c3aeb5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
