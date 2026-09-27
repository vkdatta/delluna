export const name="lucid_3-map-pin-minus-inside";
export const id="dl_f9b9c1c0cefc429d8f39";
export const url=new URL("../icons/lucid_3-map-pin-minus-inside.svg?v=c805242687462f0d0513b41f75966fd381782d273e83b32a81bae751204e3449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
