export const name="pi-bold";
export const id="dl_8b904957a2a94840b614";
export const url=new URL("../icons/pi-bold.svg?v=353aa74a48b99e9a15133e96b5171059cd4ea07aa2155dc86d0c3b0736c13374",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
