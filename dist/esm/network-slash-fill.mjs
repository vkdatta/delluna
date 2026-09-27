export const name="network-slash-fill";
export const id="dl_24e26c22309c46b595d3";
export const url=new URL("../icons/network-slash-fill.svg?v=cd3e645abd3dd593b5eb48b3c46bfb7755e3029a9fe0f4d7e0808c1d86a57d22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
