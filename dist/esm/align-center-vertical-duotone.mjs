export const name="align-center-vertical-duotone";
export const id="dl_5f59df9d568e4bd2a04f";
export const url=new URL("../icons/align-center-vertical-duotone.svg?v=82988a53acdc75ed55053300e4918871745fb1d107368b0817b0348f95dc4526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
