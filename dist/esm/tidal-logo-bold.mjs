export const name="tidal-logo-bold";
export const id="dl_069ff9e38c818501b576";
export const url=new URL("../icons/tidal-logo-bold.svg?v=e75530be1ccef0f3743f681cb431d3e55608ee109d77ffd3b67d079bb9a9e260",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
