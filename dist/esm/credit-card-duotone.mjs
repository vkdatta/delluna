export const name="credit-card-duotone";
export const id="dl_5b2292f0bde0403590ef";
export const url=new URL("../icons/credit-card-duotone.svg?v=aea4d4d6a0d41aff67a2beb15ead3b6761607473bb9a588a796a4e0aa7b2e600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
