export const name="align-center-horizontal";
export const id="dl_e2fb9bd5dac94eddb2e9";
export const url=new URL("../icons/align-center-horizontal.svg?v=d3303453f368cd0bb2ce243c695c9a02eac9d22bdddd728cfdac031e87aefd49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
