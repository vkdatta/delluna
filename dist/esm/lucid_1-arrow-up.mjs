export const name="lucid_1-arrow-up";
export const id="dl_e67a3431097645399d61";
export const url=new URL("../icons/lucid_1-arrow-up.svg?v=886f784f747baa9072a008fa774a157c667524f8866872d6edde79d672aeb012",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
