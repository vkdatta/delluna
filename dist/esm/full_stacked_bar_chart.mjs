export const name="full_stacked_bar_chart";
export const id="dl_96d582049c86483a623e";
export const url=new URL("../icons/full_stacked_bar_chart.svg?v=1cb75e58ebeddf6a4529855295fd103402475e101989267873d58757337f236c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
