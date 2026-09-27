export const name="widget_small";
export const id="dl_001cf10089d6d1b299e8";
export const url=new URL("../icons/widget_small.svg?v=17ac8b6ed7057a08b62e5654e32f952abc34488d7ccdc5134301ef0585de023d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
