export const name="person-simple-swim-fill";
export const id="dl_96e709f0532c440ca3f4";
export const url=new URL("../icons/person-simple-swim-fill.svg?v=f606d32c86da68cb4ffdddb6758d8188e4bfa183de77a833e29887ad58dee3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
