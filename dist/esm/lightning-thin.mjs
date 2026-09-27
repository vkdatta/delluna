export const name="lightning-thin";
export const id="dl_f30ee5122fb64707a2cf";
export const url=new URL("../icons/lightning-thin.svg?v=52910ed935ee3da19270a3ed8a18b8cd1af3f9176a0a1bf7c24f83d51b2ca31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
