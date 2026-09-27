export const name="dashboard_customize";
export const id="dl_0b2dae78a213ea74187f";
export const url=new URL("../icons/dashboard_customize.svg?v=9466c7d17ceca858b6694e6306ac23a217753a178a3e51fd0a9ddba838b41a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
