export const name="gate";
export const id="dl_2eedbc353b1ecfc8c1ce";
export const url=new URL("../icons/gate.svg?v=c8af3cc202369560ed7a7541658f2918c5a2cbfbb5ceec84aa61640178aae76e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
