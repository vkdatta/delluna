export const name="app_badging-fill";
export const id="dl_0cd340ba8d36bfc7d2bc";
export const url=new URL("../icons/app_badging-fill.svg?v=63126513940479bb09504a05eed6f1febf61a6fcd0d84c4ce83b38775bbb8476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
