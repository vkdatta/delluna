export const name="google-play-logo-thin";
export const id="dl_d27182be002c4ed38d5b";
export const url=new URL("../icons/google-play-logo-thin.svg?v=317c65a84157a19385a0f6619f22a599fae96ed76e323cb83caf8993bbd3407c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
