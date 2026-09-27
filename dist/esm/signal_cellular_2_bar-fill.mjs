export const name="signal_cellular_2_bar-fill";
export const id="dl_50ea31906153b8de946a";
export const url=new URL("../icons/signal_cellular_2_bar-fill.svg?v=9143c8dd73f1d84154b8f505aaf35a2d9668f3dbdc0a695d9ed6b8491443a6d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
