export const name="mode_heat";
export const id="dl_67191e87ed10492d8873";
export const url=new URL("../icons/mode_heat.svg?v=2573992d380fdb544ebe7ba350110dc33443747a65b9bbd2f5dd4a4d92675973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
