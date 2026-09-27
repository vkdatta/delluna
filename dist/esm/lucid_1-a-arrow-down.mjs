export const name="lucid_1-a-arrow-down";
export const id="dl_99e16fe3de054ba595f1";
export const url=new URL("../icons/lucid_1-a-arrow-down.svg?v=65a65d549f172d993a18c7870f5af132af90859a459076b728bd372709d07705",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
