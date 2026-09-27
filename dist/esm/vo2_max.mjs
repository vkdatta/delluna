export const name="vo2_max";
export const id="dl_7c7565da146cff99cd42";
export const url=new URL("../icons/vo2_max.svg?v=2f286eeca986649268f6f0b3d930716631077d86196dcbe40ca900a72fd761d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
