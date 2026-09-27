export const name="signal_wifi_bad-fill";
export const id="dl_0d5ba5eb0a633c391c5c";
export const url=new URL("../icons/signal_wifi_bad-fill.svg?v=daf1cb66872b24939f40e250c86d5599845b211425c74ad28e04b7fdce2d756a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
