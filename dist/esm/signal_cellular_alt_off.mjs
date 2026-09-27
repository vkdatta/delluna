export const name="signal_cellular_alt_off";
export const id="dl_7abe612a83d6c75a65e5";
export const url=new URL("../icons/signal_cellular_alt_off.svg?v=ca0f29e5b3c0a286d9e459da95b0208af6c7f34665a8ebc30994181f80578b6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
