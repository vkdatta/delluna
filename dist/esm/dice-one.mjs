export const name="dice-one";
export const id="dl_0e4ca1612bb5457fb956";
export const url=new URL("../icons/dice-one.svg?v=cbf5bab781be00f5d35a3cab45c827b1f85826065e184b322aa72c250ad3cdb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
