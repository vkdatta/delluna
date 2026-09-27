export const name="laptop_mac";
export const id="dl_19d5aeac0fd7fec69a30";
export const url=new URL("../icons/laptop_mac.svg?v=11845aeaaf67fc1ae20e030f895f9e91a7cdcf2ebbe478ec34fee9908a13fd81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
