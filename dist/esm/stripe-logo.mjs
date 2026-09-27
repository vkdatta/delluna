export const name="stripe-logo";
export const id="dl_1d42e818101bcaf92100";
export const url=new URL("../icons/stripe-logo.svg?v=64e52c2c2bb64358fdb530206b4d3e1da69bad85fc21dbb3dd40cfc5b9efcbbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
