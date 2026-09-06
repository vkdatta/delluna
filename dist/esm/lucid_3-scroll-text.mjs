export const name="lucid_3-scroll-text";
export const id="dl_acac7bef925e470e8595";
export const url=new URL("../icons/lucid_3-scroll-text.svg?v=5c735b642ca048fed0b81249ac949109796684cfa287085b91b84e9fa3c342e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
