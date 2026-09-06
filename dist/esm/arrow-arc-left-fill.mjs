export const name="arrow-arc-left-fill";
export const id="dl_fab12c3366c14692af1d";
export const url=new URL("../icons/arrow-arc-left-fill.svg?v=590249c8011a5e8cfbe654a3808ad86e34c1497c1366934a8a9b8736d0364f9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
