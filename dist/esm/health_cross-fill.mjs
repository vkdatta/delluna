export const name="health_cross-fill";
export const id="dl_63717233bab14a6ea75a";
export const url=new URL("../icons/health_cross-fill.svg?v=c496ec88cb57d70406b0bf2edfd5ee3b518851e8fbcd2d72c793008f6ecd0ce3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
