export const name="check_box-fill";
export const id="dl_67aff422acd186e1894c";
export const url=new URL("../icons/check_box-fill.svg?v=a4b2f7345cc15c7d7827ac18fb2cc53c6b6d27f98a2e00c80921b4f724daadec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
