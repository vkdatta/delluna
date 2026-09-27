export const name="database_off";
export const id="dl_ff37964dc611fee8dea2";
export const url=new URL("../icons/database_off.svg?v=ed2ee6bfe9a2a8ae44dc2613632dcff8fa566e8815267c4e5f799b6206a9e92f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
