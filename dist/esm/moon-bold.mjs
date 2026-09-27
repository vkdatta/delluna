export const name="moon-bold";
export const id="dl_e877e9b4f4a14d45a102";
export const url=new URL("../icons/moon-bold.svg?v=a819a4df057bbdc1047d0949ae13abc10e51a6a382f1ba578f9dafc13e63654a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
