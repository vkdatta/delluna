export const name="solar-roof-light";
export const id="dl_b89be6ca3a93b0ad06dc";
export const url=new URL("../icons/solar-roof-light.svg?v=6ee472cb56c66f4338a2bbf846ae53c8b6355ad12b2b3b570518e010c8e12e6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
