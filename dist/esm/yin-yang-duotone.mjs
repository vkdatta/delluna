export const name="yin-yang-duotone";
export const id="dl_48cab97d64c1b297ebcc";
export const url=new URL("../icons/yin-yang-duotone.svg?v=ff7769abd34617ca4ab2a026ccbed7522227352e27740f3209369da1521eefef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
