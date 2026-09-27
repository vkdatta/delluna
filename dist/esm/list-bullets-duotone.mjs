export const name="list-bullets-duotone";
export const id="dl_5ff1846fd65e405e8818";
export const url=new URL("../icons/list-bullets-duotone.svg?v=f8612f5ce925617b2f8e13743e79153e714a7241a4900874df77070d7ed4af55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
