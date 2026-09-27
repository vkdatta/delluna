export const name="reset_tv";
export const id="dl_0d0e995ff1f57b0c00e4";
export const url=new URL("../icons/reset_tv.svg?v=3dcc6994169c42dc939af6ad31e2b481f3186904ca27af0fc7cbdf5a4ac6e24e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
