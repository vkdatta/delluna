export const name="stress_management";
export const id="dl_51a566aaf5ffb4a0aabc";
export const url=new URL("../icons/stress_management.svg?v=99f0f55ec7ec6543604f41ddeadc97e866a095fd444633f1e4628b8e8badbd53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
