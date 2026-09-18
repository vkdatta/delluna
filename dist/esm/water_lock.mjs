export const name="water_lock";
export const id="dl_93c0ddb1107b433395c5";
export const url=new URL("../icons/water_lock.svg?v=b6ed9bb1a03ae7af67efc1c092d451d2e03c97af481d0a37d3f1767f43b5f020",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
