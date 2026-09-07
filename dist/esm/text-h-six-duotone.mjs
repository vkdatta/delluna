export const name="text-h-six-duotone";
export const id="dl_fc611c57761e4259b845";
export const url=new URL("../icons/T/text-h-six-duotone.svg?v=a0ab469b2b8b3e3a29f83ca80bbbcb214eb6e990a9cbb899de290348ec05375a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
