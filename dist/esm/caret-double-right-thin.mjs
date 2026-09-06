export const name="caret-double-right-thin";
export const id="dl_f8677353f5294ceca99f";
export const url=new URL("../icons/caret-double-right-thin.svg?v=f6b87e0f407cfc2efb1c84f8ef3f0e142897a6f7e394bc208cc2ba14ca0cabfb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
