export const name="fire-simple-light";
export const id="dl_bf77436b8f444bdeb553";
export const url=new URL("../icons/fire-simple-light.svg?v=5c58ca170928ae47838c61894747bee8dff004bbaf86ffb26993d02c505e72e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
