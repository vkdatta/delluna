export const name="vaping_rooms-fill";
export const id="dl_e1cd8cf3e47aa7bd88fe";
export const url=new URL("../icons/vaping_rooms-fill.svg?v=25075475f5a3db66dd3c20b7d65e632445acf1a44b648e93918a65b9fa631662",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
