export const name="dice-four";
export const id="dl_5506344accf64968b505";
export const url=new URL("../icons/dice-four.svg?v=a60d21780df4895219b1a15db08c6402fab7c049f4a53074fe0511f6287ff973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
