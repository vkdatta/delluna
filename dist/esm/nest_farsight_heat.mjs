export const name="nest_farsight_heat";
export const id="dl_dff15e1fcd560320202c";
export const url=new URL("../icons/nest_farsight_heat.svg?v=5b284b6cdbf342a529314024ccfee819df5dd2cd10103363ad4484a68338f88b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
