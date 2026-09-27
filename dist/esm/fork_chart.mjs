export const name="fork_chart";
export const id="dl_c71a307a801cda988875";
export const url=new URL("../icons/fork_chart.svg?v=1b7391d0db2568d8912b721ee24a9a80aeacfdb94dea9c742612ddca07716817",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
