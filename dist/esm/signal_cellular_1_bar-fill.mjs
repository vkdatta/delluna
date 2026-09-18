export const name="signal_cellular_1_bar-fill";
export const id="dl_5c69e6c336f84aa58519";
export const url=new URL("../icons/S/signal_cellular_1_bar-fill.svg?v=095b74e6df0800aca5ff9427a09ed85bfc2059ac8dd17376995d88ef91e7a336",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
