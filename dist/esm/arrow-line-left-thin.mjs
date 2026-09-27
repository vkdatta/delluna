export const name="arrow-line-left-thin";
export const id="dl_f5a129accba243c69bfe";
export const url=new URL("../icons/arrow-line-left-thin.svg?v=ae222f3618b5efbe85f8d0bb69cfc1b986c64d3ab331ffe85e9b5600f22c0974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
