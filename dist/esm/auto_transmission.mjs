export const name="auto_transmission";
export const id="dl_6d226b404530758ded1d";
export const url=new URL("../icons/auto_transmission.svg?v=d831a722a45e8f585a0a5a47670ef87a87bea8f68857fd74f1345a46d2f82e96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
