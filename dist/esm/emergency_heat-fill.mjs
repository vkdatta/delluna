export const name="emergency_heat-fill";
export const id="dl_d5c97170d33142cd98c0";
export const url=new URL("../icons/E/emergency_heat-fill.svg?v=22536370c305fda93961f6c1fd3255e95d99651d75afced266b7b88d8c005df1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
