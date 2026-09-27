export const name="device-mobile-speaker-light";
export const id="dl_41e1a0f3a7134243b228";
export const url=new URL("../icons/device-mobile-speaker-light.svg?v=82aef3f080822442287eafd42107652a28ece70b8976766aa57e96090ea7cb79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
