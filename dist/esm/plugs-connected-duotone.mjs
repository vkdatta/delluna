export const name="plugs-connected-duotone";
export const id="dl_b30be1f098af49729382";
export const url=new URL("../icons/plugs-connected-duotone.svg?v=efd9719ae5dc8fac82db613a6dec9b03965893da7c5a70d200d527446ec0bd23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
