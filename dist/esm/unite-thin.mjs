export const name="unite-thin";
export const id="dl_4170a0bf8bac44399ad4";
export const url=new URL("../icons/U/unite-thin.svg?v=95b15d7c3ce317cb8aa6ba4ca615ef1173f19d6b3b908414db6bda158e1089a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
