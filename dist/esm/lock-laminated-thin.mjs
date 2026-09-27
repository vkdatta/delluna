export const name="lock-laminated-thin";
export const id="dl_97117c5c965846549c64";
export const url=new URL("../icons/lock-laminated-thin.svg?v=4f78c0fc15a1779f53fe49e8c46547854425fea0c87aa398f7580ac01c82439f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
