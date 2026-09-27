export const name="lucid_1-clipboard-list";
export const id="dl_3483ea703e9e4a569830";
export const url=new URL("../icons/lucid_1-clipboard-list.svg?v=2bad4830c5a9fb56833dd33e51609df5d0989b72e1b45e9c543fc15d1ed89903",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
