export const name="text-aa-duotone";
export const id="dl_16f5e8b61ebb41969eb4";
export const url=new URL("../icons/T/text-aa-duotone.svg?v=edf4791e1426a24710e6c1ddb207be6012428b2f6cf9147fc9af13bbd20a5e3f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
