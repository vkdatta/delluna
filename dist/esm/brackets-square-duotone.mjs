export const name="brackets-square-duotone";
export const id="dl_4a3fa1fcf98a49e2acc1";
export const url=new URL("../icons/brackets-square-duotone.svg?v=53e9a332c3c04cabf7b509d39a6d362cb68d4bae844306796f6f6ba776183fa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
