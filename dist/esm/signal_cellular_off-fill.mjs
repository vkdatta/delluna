export const name="signal_cellular_off-fill";
export const id="dl_492fff5581db2b84e8bf";
export const url=new URL("../icons/signal_cellular_off-fill.svg?v=a9abd76c06c6804e1e8f561581bf6d3fa2f196f36e20ed01f7fbc54d30f86e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
