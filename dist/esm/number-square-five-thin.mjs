export const name="number-square-five-thin";
export const id="dl_b06ef5b97abb42d48c32";
export const url=new URL("../icons/number-square-five-thin.svg?v=bbe70ce62e6193ab5490bd44b59fb9dfce5c8bc0b70e1a6a04b2902c0329f998",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
