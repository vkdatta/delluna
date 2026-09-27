export const name="brain-duotone";
export const id="dl_02aec42eab8745a5beca";
export const url=new URL("../icons/brain-duotone.svg?v=f175990abba4980aeff3ae7246d3a64f92c620de7e30087f5dadb652723adf26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
