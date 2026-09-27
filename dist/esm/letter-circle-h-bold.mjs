export const name="letter-circle-h-bold";
export const id="dl_1eb757768bee45cd8c35";
export const url=new URL("../icons/letter-circle-h-bold.svg?v=919899b63715e254400a103f06617d205b6346ca28f040d1f5adfc12b05c6eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
