export const name="lucid_2-fold-horizontal";
export const id="dl_3958c29e3abb46c28a06";
export const url=new URL("../icons/lucid_2-fold-horizontal.svg?v=bc53f4d19b02046f7fceecc88528b53567b8b2eba93274ace3e0f5c79d806f9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
