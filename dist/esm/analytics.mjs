export const name="analytics";
export const id="dl_b26c951fd3db0fdfaaef";
export const url=new URL("../icons/analytics.svg?v=09c690543608e083af12bc899598213948270a71483072074eb479221254214c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
