export const name="graph-duotone";
export const id="dl_f4af0a548caa4c538df5";
export const url=new URL("../icons/graph-duotone.svg?v=621b74dc2817e86196c402c1406fb927a8d5d6fc688cdd9cafdd4f1fd9ac0cec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
