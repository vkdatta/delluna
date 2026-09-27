export const name="signal_cellular_4_bar-fill";
export const id="dl_3449c8ebbbdcd3452412";
export const url=new URL("../icons/signal_cellular_4_bar-fill.svg?v=165028406991ab3e6cd9ec818a9a935e40325ecd1fcaa2082bb98bb8081118be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
