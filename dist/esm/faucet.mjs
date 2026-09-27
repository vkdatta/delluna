export const name="faucet";
export const id="dl_f43125f34f5db5c6331a";
export const url=new URL("../icons/faucet.svg?v=ab15e8d22c1bea67ea27b875cf686a542c2a207537bbad03068e011ec12c307b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
