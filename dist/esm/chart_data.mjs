export const name="chart_data";
export const id="dl_50dc483e6c214dc3b454";
export const url=new URL("../icons/chart_data.svg?v=6f49bbc756257ce237d1323d3dc46da3be4839829072595d92f17eaf3e766583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
