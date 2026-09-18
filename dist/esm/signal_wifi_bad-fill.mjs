export const name="signal_wifi_bad-fill";
export const id="dl_ada1c2b90e124ca292df";
export const url=new URL("../icons/S/signal_wifi_bad-fill.svg?v=f3eb2ef9535da0a9e1175849790c2256f50cae57f99503bb6b25b974c7ef41ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
