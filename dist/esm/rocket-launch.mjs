export const name="rocket-launch";
export const id="dl_5315ff9fc9fc4c5292a1";
export const url=new URL("../icons/rocket-launch.svg?v=81915f593aca372ca857cf16e7d651117d78325acb640f217789a7c9e197dedd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
