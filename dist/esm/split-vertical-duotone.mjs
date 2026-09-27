export const name="split-vertical-duotone";
export const id="dl_e942ec8603ee16893944";
export const url=new URL("../icons/split-vertical-duotone.svg?v=6308e74603dfbbd6e3986bb0a2efb28460c502bc7ed808daf0a309c57bfa3a2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
