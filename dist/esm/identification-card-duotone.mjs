export const name="identification-card-duotone";
export const id="dl_66798e7867bb4338a71d";
export const url=new URL("../icons/identification-card-duotone.svg?v=bd59f63e3c773928723f28dc8dd24dae3c4f3afd03378c606f347583ba4d96f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
