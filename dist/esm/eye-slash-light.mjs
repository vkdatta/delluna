export const name="eye-slash-light";
export const id="dl_70a137282718485494b3";
export const url=new URL("../icons/eye-slash-light.svg?v=fcbb73816965e639da9381b7b8edda6b9314f65acd79d986a5a6a3f68cae3153",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
