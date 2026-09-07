export const name="folder-open-thin";
export const id="dl_d261afbafe394543b305";
export const url=new URL("../icons/folder-open-thin.svg?v=6ff29f97617c03340ff6a9fa98ae14295c527acb1e01052de467031e34801184",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
