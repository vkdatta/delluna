export const name="person_celebrate";
export const id="dl_e860d36165196e703596";
export const url=new URL("../icons/person_celebrate.svg?v=2b1a7f854d8ef27d73baa2dc7fb6b7a90acc3c8edfc99abb79c4124f8d7164af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
