export const name="network-x-thin";
export const id="dl_c5350a06037747b29bfb";
export const url=new URL("../icons/network-x-thin.svg?v=91d069cc55bc8fd21222a4b764b2379fb6608ed9827bd9ea1d6240f9bad7ad14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
