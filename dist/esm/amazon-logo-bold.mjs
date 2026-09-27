export const name="amazon-logo-bold";
export const id="dl_cd3d949dbc9044ae9266";
export const url=new URL("../icons/amazon-logo-bold.svg?v=d188747cab98910e8d5d6cb1db2a8bab671107cad216ea874f798fba0d321d60",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
