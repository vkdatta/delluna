export const name="thermometer-fill";
export const id="dl_2dda929cefefc0e26f08";
export const url=new URL("../icons/thermometer-fill.svg?v=3ab0de473175d3f93cf2881801dda3f0b867a95858a0b35ed510d16411bac52d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
