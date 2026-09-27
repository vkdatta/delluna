export const name="barricade-thin";
export const id="dl_067dfadc7d254a95aaab";
export const url=new URL("../icons/barricade-thin.svg?v=1318b530dcb434ab4a547085a2b63a81e6b517dcfe612bfca50651f7f00158bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
