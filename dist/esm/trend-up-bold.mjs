export const name="trend-up-bold";
export const id="dl_9dfbb2ae0ed56231863b";
export const url=new URL("../icons/trend-up-bold.svg?v=74ff30bc2f4741954e0c8e2fa757e42863e43929ac257967fcbb9789d97b6180",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
