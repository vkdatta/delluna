export const name="device-tablet-speaker-bold";
export const id="dl_c4a83b2c9f2c4cc1bcc0";
export const url=new URL("../icons/device-tablet-speaker-bold.svg?v=c7190d7e70bf5b5a5b47f0aee977800a0bac4d2e1c0df432ff55ed5c375970a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
