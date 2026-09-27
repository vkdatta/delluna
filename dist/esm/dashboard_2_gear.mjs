export const name="dashboard_2_gear";
export const id="dl_14315684310ab0fbcf10";
export const url=new URL("../icons/dashboard_2_gear.svg?v=0995f5246be77e0aa508c14cc1e13d63d14e291838526c2c91ca1b8b3f108d87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
