export const name="signal_cellular_nodata";
export const id="dl_7aeae6b5903b3367b10f";
export const url=new URL("../icons/signal_cellular_nodata.svg?v=a751d75b5720e4961584d88b21fae82943c1dc206353e4297475ee7a3f6fa9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
