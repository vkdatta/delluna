export const name="wave-sawtooth-duotone";
export const id="dl_7de076fed53a42eaa63d";
export const url=new URL("../icons/W/wave-sawtooth-duotone.svg?v=4ac083893f0c8f677ea8ed01ec1df0b18763672da27c5579f2ebf9e17b91d3bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
