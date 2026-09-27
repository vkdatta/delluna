export const name="speaker-high-bold";
export const id="dl_203ce2e2456dbfedbcc3";
export const url=new URL("../icons/speaker-high-bold.svg?v=ad619a92cc2a9c03c79108b800e77ab33f39cee005fc995d568293f5d903e7f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
