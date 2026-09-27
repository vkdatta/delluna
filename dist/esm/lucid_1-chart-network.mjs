export const name="lucid_1-chart-network";
export const id="dl_43366763d7754f32aa97";
export const url=new URL("../icons/lucid_1-chart-network.svg?v=759728ea72c1304542b47f230816e429b30aa05cab4117e4f0d8512686f170fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
