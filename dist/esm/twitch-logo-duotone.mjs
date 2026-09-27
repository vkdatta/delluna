export const name="twitch-logo-duotone";
export const id="dl_51c2e89feee47f9ef421";
export const url=new URL("../icons/twitch-logo-duotone.svg?v=0d0c214200bbd618caa957a9d157a0737a84b17229ea48d181d2a780989b0ae9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
