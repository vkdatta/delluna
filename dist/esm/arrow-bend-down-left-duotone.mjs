export const name="arrow-bend-down-left-duotone";
export const id="dl_4a46af4f398b4f408594";
export const url=new URL("../icons/arrow-bend-down-left-duotone.svg?v=8ee9722275c9043b6cc6adbf3a5058eda8d97a0b4d5c87ea603e378fd19f78c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
