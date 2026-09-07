export const name="lucid_1-chart-network";
export const id="dl_43366763d7754f32aa97";
export const url=new URL("../icons/lucid_1-chart-network.svg?v=4ab7d5c9c54099cf2fbec831915ce2cc7b8e101e0d2aa71c1ecfef311dd6d3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
