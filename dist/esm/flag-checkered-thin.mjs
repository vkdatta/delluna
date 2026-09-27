export const name="flag-checkered-thin";
export const id="dl_335a89bf8e49402da984";
export const url=new URL("../icons/flag-checkered-thin.svg?v=3706b6c0c3675c934f053dde1b48845b5ea95323fd9ac1f72b94c3096e42718e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
