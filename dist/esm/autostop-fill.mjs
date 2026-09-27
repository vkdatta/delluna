export const name="autostop-fill";
export const id="dl_80e513110ed50d833901";
export const url=new URL("../icons/autostop-fill.svg?v=55f6c3d1da0562f29e793a355901000882ee3ffe01d6ee7ca42731984cde511c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
