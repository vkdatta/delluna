export const name="automation";
export const id="dl_5377004ef06ff1c0b06b";
export const url=new URL("../icons/automation.svg?v=80d14522c27a2101a2d7cf6b9fbc7365fef4ae12dfa924c13b8fc3155838cc89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
