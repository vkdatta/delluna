export const name="chart-bar-duotone";
export const id="dl_726a9cf3a7ac47b6addb";
export const url=new URL("../icons/chart-bar-duotone.svg?v=d79f71278d671ab08ef065a2cde65ac0d5e3aa7790d65ca063d25e690074dfe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
