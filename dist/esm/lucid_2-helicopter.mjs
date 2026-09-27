export const name="lucid_2-helicopter";
export const id="dl_e11d1a95a2804f34aca1";
export const url=new URL("../icons/lucid_2-helicopter.svg?v=471c19c5a14e44b79b22942270be66cfbe1c28afdd4ea815d0ffcb2b79b11e6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
