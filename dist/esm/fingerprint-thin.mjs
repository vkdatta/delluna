export const name="fingerprint-thin";
export const id="dl_75fe54069b414b908bef";
export const url=new URL("../icons/fingerprint-thin.svg?v=32c6b34b0e9b7a82cd5479bf6872be77b20990931b4691518fbaa9bdf7d271da",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
