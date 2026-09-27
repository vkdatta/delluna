export const name="angular-logo-thin";
export const id="dl_7c8ef72e393548a18db7";
export const url=new URL("../icons/angular-logo-thin.svg?v=d3e69614366c9762e7310d901ebccf81dbc531cee88849285a285f7c02ea796e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
