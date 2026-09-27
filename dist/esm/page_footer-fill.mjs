export const name="page_footer-fill";
export const id="dl_ce7717b555e3a4ffaaa3";
export const url=new URL("../icons/page_footer-fill.svg?v=dd19f69960a80562cac09cf78151c412d8ef83b9a1d128c25052edf97879cbc2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
