export const name="number-square-five-light";
export const id="dl_217db7cc93e446dea8a0";
export const url=new URL("../icons/number-square-five-light.svg?v=282649f4c41373a3309c7af0d605796becfbf073d0520a762310eb4f8b30fc3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
