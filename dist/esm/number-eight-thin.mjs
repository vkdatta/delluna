export const name="number-eight-thin";
export const id="dl_47f9441380f241ccbdd0";
export const url=new URL("../icons/number-eight-thin.svg?v=77ba62087965136246e326a9a8739ac15b849746c2ec8978e00e011936d2e229",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
