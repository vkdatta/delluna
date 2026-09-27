export const name="signal_cellular_nodata";
export const id="dl_f53eeb46407a4fad7aff";
export const url=new URL("../icons/signal_cellular_nodata.svg?v=74216f0985f4189854d24e399f39ac177b5a0e0780bcba9db706cf6c3bcd3fe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
