export const name="ads_click-fill";
export const id="dl_81f036d4797c40218333";
export const url=new URL("../icons/A/ads_click-fill.svg?v=0528764517a9055f6a264e546a12a0a71a427c7debc0bfe7335acf276e23dd89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
