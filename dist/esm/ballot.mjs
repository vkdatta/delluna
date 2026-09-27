export const name="ballot";
export const id="dl_bdb373edb58d6c64e594";
export const url=new URL("../icons/ballot.svg?v=6baa572f28242e338b7ae681408597c130375d2ccc5d2f5cce3f3f5da5fed020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
